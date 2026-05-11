export const sectionOrder = [
  'meta', 'nav', 'hero', 'marquee', 'services', 'work',
  'process', 'manifesto', 'team', 'clients', 'cta', 'footer',
]

export const sections = {
  meta: {
    title: 'Meta',
    fields: [
      { key: 'langLabel', kind: 'text', label: 'Language label' },
      { key: 'altLabel',  kind: 'text', label: 'Alt language label' },
    ],
  },

  nav: {
    title: 'Nav',
    fields: [
      { key: 'items', kind: 'list-object', label: 'Nav items', summaryKey: 'label', shape: [
        { key: 'id',    kind: 'text', label: 'Anchor id', shared: true },
        { key: 'label', kind: 'text', label: 'Label' },
      ]},
      { key: 'cta', kind: 'text', label: 'CTA button label' },
    ],
  },

  hero: {
    title: 'Hero',
    fields: [
      { key: 'eyebrow',   kind: 'text' },
      { key: 'title1',    kind: 'text', label: 'Title line 1' },
      { key: 'title2',    kind: 'text', label: 'Title line 2' },
      { key: 'title3',    kind: 'text', label: 'Title line 3' },
      { key: 'body',      kind: 'textarea' },
      { key: 'primary',   kind: 'text', label: 'Primary button' },
      { key: 'secondary', kind: 'text', label: 'Secondary button' },
      { key: 'stats', kind: 'list-object', label: 'Stats', summaryKey: 'l', shape: [
        { key: 'k',   kind: 'text', label: 'Number',  shared: true },
        { key: 'suf', kind: 'text', label: 'Suffix',  shared: true },
        { key: 'l',   kind: 'text', label: 'Label' },
      ]},
    ],
  },

  marquee: {
    title: 'Marquee',
    rootKind: 'list-string',
    rootLabel: 'Marquee items',
  },

  services: {
    title: 'Services',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'version', kind: 'text' },
      { key: 'title1',  kind: 'text', label: 'Title line 1' },
      { key: 'title2',  kind: 'text', label: 'Title line 2' },
      { key: 'items', kind: 'list-object', label: 'Practices', summaryKey: 't', shape: [
        { key: 'n',       kind: 'text', label: 'Number', shared: true },
        { key: 't',       kind: 'text', label: 'Title' },
        { key: 'c',       kind: 'text', label: 'Code',   shared: true },
        { key: 'd',       kind: 'textarea', label: 'Description' },
        { key: 'icon',    kind: 'image', label: 'Icon / illustration', section: 'services', shared: true },
        { key: 'tags',    kind: 'list-string', label: 'Tags' },
        { key: 'details', kind: 'list-string', label: 'Details (bulleted)' },
      ]},
    ],
  },

  work: {
    title: 'Work',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'title1',  kind: 'text', label: 'Title line 1' },
      { key: 'title2',  kind: 'text', label: 'Title line 2' },
      { key: 'note',    kind: 'text' },
      { key: 'projects', kind: 'list-object', label: 'Projects', summaryKey: 'title', preview: { route: '/#/work/{id}', idKey: 'id' }, shape: [
        { key: 'id',        kind: 'text', label: 'ID (slug used in /#/work/:id)', shared: true },
        { key: 'title',     kind: 'text' },
        { key: 'client',    kind: 'text', shared: true },
        { key: 'year',      kind: 'text', shared: true },
        { key: 'tag',       kind: 'text', label: 'Tag (e.g. "Health · Screening")' },
        { key: 'variant',   kind: 'text', label: 'Fallback mock variant (used when no thumbnail): analytics | schedule | kanban | map | archive | fleet', shared: true },
        { key: 'desc',      kind: 'textarea', label: 'Card description (short)' },
        { key: 'thumbnail', kind: 'image', label: 'Card thumbnail', section: 'work', shared: true },
        { key: 'hero',      kind: 'image', label: 'Detail page hero image', section: 'work', shared: true },
        { key: 'summary',   kind: 'textarea', label: 'Detail page summary (longer)' },
        { key: 'outcomes',  kind: 'list-string', label: 'Outcomes / metrics' },
        { key: 'stack',     kind: 'list-string', label: 'Tech stack tags' },
        { key: 'gallery',   kind: 'list-image', label: 'Gallery images', section: 'work', shared: true },
        { key: 'blocks',    kind: 'list-object', label: 'Body blocks', summaryKey: 'heading', shape: [
          { key: 'heading', kind: 'text', label: 'Heading (optional)' },
          { key: 'body',    kind: 'textarea', label: 'Body' },
          { key: 'image',   kind: 'image', label: 'Inline image (optional)', section: 'work', shared: true },
        ]},
      ]},
    ],
  },

  process: {
    title: 'Process',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'title1',  kind: 'text', label: 'Title line 1' },
      { key: 'title2',  kind: 'text', label: 'Title line 2' },
      { key: 'steps', kind: 'list-object', label: 'Steps', summaryKey: 't', shape: [
        { key: 'n', kind: 'text', label: 'Number', shared: true },
        { key: 't', kind: 'text', label: 'Title' },
        { key: 'd', kind: 'textarea', label: 'Description' },
      ]},
    ],
  },

  manifesto: {
    title: 'Manifesto',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'body1',   kind: 'textarea', label: 'Body 1 (before emphasized 1)' },
      { key: 'em1',     kind: 'text',     label: 'Emphasized 1' },
      { key: 'body2',   kind: 'textarea', label: 'Body 2 (between em1 and em2)' },
      { key: 'em2',     kind: 'text',     label: 'Emphasized 2' },
      { key: 'body3',   kind: 'textarea', label: 'Body 3 (after emphasized 2)' },
      { key: 'pillars', kind: 'list-object', label: 'Pillars', summaryKey: 't', shape: [
        { key: 't', kind: 'text', label: 'Title' },
        { key: 'd', kind: 'textarea', label: 'Description' },
      ]},
    ],
  },

  team: {
    title: 'Team',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'title1',  kind: 'text', label: 'Title line 1' },
      { key: 'title2',  kind: 'text', label: 'Title line 2' },
      { key: 'blurb',   kind: 'textarea' },
      { key: 'coming',  kind: 'text', label: 'Placeholder note' },
      { key: 'members', kind: 'list-object', label: 'Members', summaryKey: 'role', shape: [
        { key: 'name',     kind: 'text', label: 'Name', shared: true },
        { key: 'role',     kind: 'text' },
        { key: 'initials', kind: 'text', shared: true },
        { key: 'n',        kind: 'text', label: 'Number', shared: true },
        { key: 'photo',    kind: 'image', label: 'Headshot / photo', section: 'team', shared: true },
        { key: 'scope',    kind: 'textarea' },
      ]},
    ],
  },

  clients: {
    title: 'Clients',
    fields: [
      { key: 'eyebrow', kind: 'text' },
      { key: 'label',   kind: 'text', label: 'Section label' },
      { key: 'title1',  kind: 'text', label: 'Title line 1' },
      { key: 'title2',  kind: 'text', label: 'Title line 2' },
      { key: 'featured', kind: 'list-object', label: 'Featured clients', summaryKey: 'name', shape: [
        { key: 'name', kind: 'text', shared: true },
        { key: 'sub',  kind: 'text', label: 'Sub-label' },
        { key: 'tag',  kind: 'text' },
        { key: 'logo', kind: 'image', label: 'Logo', section: 'clients', shared: true },
      ]},
      { key: 'othersLabel', kind: 'text', label: 'Others label' },
      { key: 'others',      kind: 'list-string', label: 'Other clients' },
    ],
  },

  cta: {
    title: 'CTA',
    fields: [
      { key: 'eyebrow',   kind: 'text' },
      { key: 'title1',    kind: 'text', label: 'Title line 1' },
      { key: 'title2',    kind: 'text', label: 'Title line 2' },
      { key: 'primary',   kind: 'text', label: 'Primary CTA' },
      { key: 'secondary', kind: 'text', label: 'Secondary CTA' },
    ],
  },

  footer: {
    title: 'Footer',
    fields: [
      { key: 'blurb', kind: 'textarea' },
      { key: 'cols', kind: 'list-object', label: 'Columns', summaryKey: 'h', shape: [
        { key: 'h', kind: 'text', label: 'Header' },
        { key: 'l', kind: 'list-string', label: 'Links' },
      ]},
      { key: 'copy1', kind: 'text', label: 'Copy line 1' },
      { key: 'copy2', kind: 'text', label: 'Copy line 2' },
    ],
  },
}
