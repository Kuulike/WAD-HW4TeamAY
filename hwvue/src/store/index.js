import { createStore } from 'vuex'

export default createStore({
strict: true,
state: {
postsList:
[
    {
        id:1,
        timestamp: "Sept 30, 2022",   
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",
        body: "Tartu keskse väljaku, Suurturu arhitektuuri tähtsamateks ehitisteks saidki uus raekoda väljaku laiemas ja perspektiivi lõpetav Kivisild väljaku kitsamas osas.",
        postPicture:"",
        likes: 0
    
    },
    {
        id:2,
        timestamp: "Sept 29, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Tartu uus logo",
        postPicture:"https://owncloud.ut.ee/owncloud/s/Q9BMYEEapfosC74/preview",
        likes: 0
    },
    {
        id:3,
        timestamp: "Sept 28, 2022", 
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "6. oktoobril algab taas kaasava eelarve rahvahääletus. Erinevalt eelmistest aastatest saavad hääleõiguse ka need kuni 26-aastased tudengid, kelle registreeritud elukoht pole Tartu linnas.",
        postPicture:"",
        likes: 0
    },
    {
        id:4,
        timestamp: "Sept 27, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Tartu on Euroopa kultuuripealinn 2024",
        postPicture:"https://owncloud.ut.ee/owncloud/s/dHgxppQXySkeA3x/preview",
        likes: 0
    },
    {
        id:5,
        timestamp: "Sept 26, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "12. oktoobril avatakse Tartus Hugo Treffneri Gümnaasiumis tudengisöökla. See on Tartu Ülikooli üliõpilaste eestvedamisel sündinud algatus, mille eesmärk on pakkuda tudengitele taskukohast lõunasööki. Tudengisöökla töötab igal argipäeval kella 14–16.",
        postPicture:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/TCN2MLqn7JcHJNX?x=1910&y=487&a=true&file=tudengisookla.jpg&scalingup=0",
        likes: 0
        
    },
    
    {
        id:6,
        timestamp: "Sept 25, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Sel nädalal alustati kesklinna pargis uue linnaniidu rajamist, et tärkavad taimed saaksid kevadel kiire stardi.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:7,
        timestamp: "Sept 24, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Tamme puiestee on alates homsest kuni 15. detsembrini torustikutöödeks suletud umbes 100 meetriste töölõikudena.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:8,
        timestamp: "Sept 23, 2022",           
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Ülenurmes avati täna Tartu Smart Bike Share parkla.",
        postPicture:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/k6pwrLarsLRB69Z?x=1910&y=487&a=true&file=ylenumrerattaparkla.jpg&scalingup=0",
        likes: 0
        
    },
    
    {
        id:9,
        timestamp: "Sept 22, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Täna lõppev Tartu Haridusfestival pani meid mõtlema haridusteemadele.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:10,
        timestamp: "Sept 21, 2022",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Taas toimub Tartus puulehtede tasuta äravedu nende kruntide juurest, kus linna puud kasvavad eramu omanike koristatavate avalike kõnniteede läheduses.",
        postPicture:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/2fkRWdiPoiWCxad?x=1910&y=487&a=true&file=puulehed.png&scalingup=0",
        likes: 0
        
    }
    
    ]
},
getters: {
},
mutations: {
    ResetLikes: (state) => {
        state.postsList.forEach(post => {
            post.likes =0;
        })
        },
    IncreaseLikes: (state) =>{
            state.postsList.forEach (post=> {
                post.likes++;
            })
        }    
    },
actions: {
        ResetLikeAct: act => {
            setTimeout(function() {
                act.commit("ResetLikes")
            }, 10)
        },
        IncreaseLikeAct: act => {
            setTimeout(function() {
                act.commit("IncreaseLikes")
            }, 10)
        }
},
modules: {
}
})
