import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    postsList:
    [
      {
        id:1,
        timestamp: "Sept 30, 2022",    
        title:"ajalugu",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",
        body: "Tartu keskse väljaku, Suurturu arhitektuuri tähtsamateks ehitisteks saidki uus raekoda väljaku laiemas ja perspektiivi lõpetav Kivisild väljaku kitsamas osas.",
        postPicture:"f",
        like:"../assets/likelogo.png"
    
    },
    {
        id:2,
        timestamp: "Sept 29, 2022",
        title:"tartu logo",
        me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
        body: "Tartu uus logo",
        postPicture:"https://owncloud.ut.ee/owncloud/s/Q9BMYEEapfosC74/preview",
        like:"../assets/likelogo.png" 
    }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
