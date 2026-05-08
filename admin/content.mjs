import fs from 'node:fs/promises'
import path from 'node:path'

function fileFor(rootDir, lang) {
  return path.join(rootDir, 'src', 'data', `content.${lang}.json`)
}

export async function readContent(rootDir, lang) {
  const file = fileFor(rootDir, lang)
  const stat = await fs.stat(file)
  const raw = await fs.readFile(file, 'utf8')
  return { content: JSON.parse(raw), mtime: stat.mtimeMs }
}

export async function writeContent(rootDir, lang, content, baseMtime) {
  const file = fileFor(rootDir, lang)
  const stat = await fs.stat(file)
  if (baseMtime != null && Math.abs(stat.mtimeMs - Number(baseMtime)) > 1) {
    const e = new Error('file changed on disk since last load')
    e.code = 'MTIME_CONFLICT'
    e.currentMtime = stat.mtimeMs
    throw e
  }
  if (typeof content !== 'object' || content === null || Array.isArray(content)) {
    const e = new Error('content must be a plain object')
    e.code = 'BAD_CONTENT'
    throw e
  }
  const json = JSON.stringify(content, null, 2) + '\n'
  const tmp = file + '.tmp'
  await fs.writeFile(tmp, json, 'utf8')
  await fs.rename(tmp, file)
  const newStat = await fs.stat(file)
  return { mtime: newStat.mtimeMs }
}
