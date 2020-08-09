module.exports = {
  devServer: {
    
    proxy: {
      "/api": {
        target: "http://192.168.1.99/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
                  
        }
              
      }
          
    }


  }
}
