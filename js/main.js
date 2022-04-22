const editor =grapesjs.init({
    container : "#editor",
    fromElement : true,
    width : "auto",
    storageManager: false,
    plugins: ["grapesjs-preset-webpage"],
    pluginsOpts:{
        "grapesjs-preset-webpage": {},
    },
    blockManager: {
        appendTo: "#blocks",
    }, 
/*     layerManager:{
        appendTo: "#layer-container",
    },  */
/*     styleManager:{
        appendTo: "#style-container",
    }, */
/*     panels:{
        defaults:[
        {
            id:"basic+actions",
            el:".panel__basic-action",
            buttons:[
                {
                    id:"visibility",
                    active:true,
                    className: "btn-toggle-borders",
                    label: "<i class ='bi bi=border'></i>",
                    command: "sw-visibility"
                },

            ]
        },
        {
            id: "panel-devices",
            el: ".panel__devices",
            buttons:[
                {
                    id:"device-desktop",
                    label:"<i class ='bi bi-laptop'></i>",
                    command: "set-device-desktop",
                    active : true,
                    togglable:false,
                },
                {
                    id:"device-moblie",
                    label:"<i class ='bi bi-phone'></i>",
                    command: "set-device-mobile",
                },
            ],
        },
      ],
    }, */
/*     deviceManager:{
       devices:[
        {
           name:"Desktop",
           width:"",
        },
        {
            name:"Mobile",
            width:"320px",
            widthMedia:"480px",
        },
      ], 
    }, */
});

    