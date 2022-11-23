import { createStore } from 'vuex'

export default createStore({
strict: true,
state: {
postsList:
[
    {
        id:1,
        timestamp: "Sept 30, 2022",   
        me:"../assets/me.png",
        body: "Tartu keskse väljaku, Suurturu arhitektuuri tähtsamateks ehitisteks saidki uus raekoda väljaku laiemas ja perspektiivi lõpetav Kivisild väljaku kitsamas osas.",
        postPicture:"",
        likes1: 0
    
    },
    {
        id:2,
        timestamp: "Sept 29, 2022",
        me:"../assets/me.png",    
        body: "Tartu uus logo",
        postPicture:"../assets/uuslogo.jpg",
        likes: 0
    },
    {
        id:3,
        timestamp: "Sept 28, 2022", 
        me:"../assets/me.png",    
        body: "6. oktoobril algab taas kaasava eelarve rahvahääletus. Erinevalt eelmistest aastatest saavad hääleõiguse ka need kuni 26-aastased tudengid, kelle registreeritud elukoht pole Tartu linnas.",
        postPicture:"",
        likes: 0
    },
    {
        id:4,
        timestamp: "Sept 27, 2022",
        me:"../assets/me.png",    
        body: "Tartu on Euroopa kultuuripealinn 2024",
        postPicture:"../assets/raeplats.png",
        likes: 0
    },
    {
        id:5,
        timestamp: "Sept 26, 2022",
        me:"../assets/me.png",    
        body: "12. oktoobril avatakse Tartus Hugo Treffneri Gümnaasiumis tudengisöökla. See on Tartu Ülikooli üliõpilaste eestvedamisel sündinud algatus, mille eesmärk on pakkuda tudengitele taskukohast lõunasööki. Tudengisöökla töötab igal argipäeval kella 14–16.",
        postPicture:"../assets/tudengisookla.jpg",
        likes: 0
        
    },
    
    {
        id:6,
        timestamp: "Sept 25, 2022",
        me:"../assets/me.png",    
        body: "Sel nädalal alustati kesklinna pargis uue linnaniidu rajamist, et tärkavad taimed saaksid kevadel kiire stardi.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:7,
        timestamp: "Sept 24, 2022",
        me:"../assets/me.png",    
        body: "Tamme puiestee on alates homsest kuni 15. detsembrini torustikutöödeks suletud umbes 100 meetriste töölõikudena.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:8,
        timestamp: "Sept 23, 2022",           
        me:"../assets/me.png",    
        body: "Ülenurmes avati täna Tartu Smart Bike Share parkla.",
        postPicture:"../assets/ylenurmerattaparkla.jpg",
        likes: 0
        
    },
    
    {
        id:9,
        timestamp: "Sept 22, 2022",
        me:"../assets/me.png",    
        body: "Täna lõppev Tartu Haridusfestival pani meid mõtlema haridusteemadele.",
        postPicture:"",
        likes: 0
    },
    
    {
        id:10,
        timestamp: "Sept 21, 2022",
        me:"../assets/me.png",    
        body: "Taas toimub Tartus puulehtede tasuta äravedu nende kruntide juurest, kus linna puud kasvavad eramu omanike koristatavate avalike kõnniteede läheduses.",
        postPicture:"../assets/puulehed.png",
        likes: 0
        
    }
    
    ]
},
getters: {
},
mutations: {
    ResetLikes: (state) => {
        state.postsList.forEach(post => {
            post.likes = 0
        })
        },
    IncreaseLikes: (state, payload) =>{
            const item = state.postsList.find(item => item.id === payload);
            item.id++
        }    
    },
actions: {
        ResetLikeAct: act => {
            setTimeout(function() {
                act.commit("ResetLikes")
            }, 10)
        },
        IncreaseLikeAct: (act, payload) => {
            setTimeout(function() {
                act.commit("IncreaseLikes", payload)
            }, 10)
        }
},
modules: {
}
})
