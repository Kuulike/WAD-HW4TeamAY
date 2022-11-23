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
      postPicture:"f",
    
    },
    {
      id:2,
      timestamp: "Sept 29, 2022",
      me:"https://owncloud.ut.ee/owncloud/apps/files_sharing/publicpreview/K2yERnxKKAZJs6W?x=1905&y=505&a=true&file=me.png&scalingup=0",    
      body: "Tartu uus logo",
      postPicture:"https://owncloud.ut.ee/owncloud/s/Q9BMYEEapfosC74/preview",
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
