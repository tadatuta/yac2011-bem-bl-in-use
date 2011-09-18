({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css' },
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url:'index.js' }
    ],
    content: {
        block: 'b-page-inner',
        content: {
            block: 'b-menu-vert',
            js: true,
            mods: { list: 'blocks' },
            content: [
                {
                    elem: 'item',
                    content: [
                        {
                            block: 'b-link',
                            mods: { pseudo: 'yes' },
                            mix: [{ block: 'b-menu-vert', elem: 'trigger', elemMods: { state: 'opened' } }],
                            content: 'blocks-common'
                        },
                        {
                            elem: 'text',
                            content: 'Общие блоки'
                        }
                    ],
                    'item-content': {
                        elem: 'item-content',
                        elemMods: { visibility: 'visible' },
                        content: 'Вложенное меню'
                    }
                }
            ]
        }
    }
})
