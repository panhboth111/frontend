import axios from "axios"
const URL = 'http://localhost:3000'
class Service {
    static redirect(){
        if(window.location.pathname !=="/" && !localStorage.getItem("token")) setTimeout(()=> window.location.replace("/"),100)
        else if(window.location.pathname === "/" && localStorage.getItem("token"))  setTimeout(()=> window.location.replace("/home"),100)
    }
    static async signup(username,email,password){
         await axios.post(`${URL}/auth/signup`,{username,email,password})
         .then(res => {
             const {success,message} = res.data
             alert(message)
             if(success){
                 setTimeout(()=> window.location.reload(),500)
             }
         })
         .catch(err => alert(err.message))
    }
    static async signin(username,password){
        const credentials = await axios.post(`${URL}/auth/signin`,{username,password})
        const {message,success,token} = credentials.data
        alert(message)
        if(success){
            localStorage.setItem('token',token)
            setTimeout(()=> window.location.replace('/home'),1000)
        }
    }
    static async signout(){
        localStorage.clear()
        alert("Signed out successfully")
        setTimeout(()=> window.location.replace('/'),200)
    }
    static async upload(content){
        const token = localStorage.getItem('token')
        await axios.post(`${URL}/api`,{
            query: `mutation{
                createPost(content:"${content}"){
                    postedBy
                }
            }`
        },
        {
            headers:{"auth-token":token}
        })
        .then(res => {
            console.log(res.data)
            alert("Published successfully")
            setTimeout(()=> window.location.replace('/home'),200)
        })
        .catch(err => console.log(err))
    }
    static async changeProfilePic(profilePic){
        const token = localStorage.getItem('token')
        await axios.post(`${URL}/api`,{
            query: `mutation{
                changeProfilePic(profilePic:"${profilePic}"){
                    username
                }
            }`
        },
        {
            headers:{"auth-token":token}
        })
        .then(res => {
            console.log(res.data)
            alert("Profile picture changed successfully")
            setTimeout(()=> window.location.reload(),100)

        })
    }
    static async getUser(){
        const token = localStorage.getItem('token')
        const response =  await axios.post(`${URL}/api`,{
            query: `{
                user{
                    username
                    profilePic
                }
            }`
        },
        {headers:{"auth-token":token}})
        const user = response.data.data.user
        return user
    }
    static async getUsers(){
        const token = localStorage.getItem('token')
        const response =  await axios.post(`${URL}/api`,{
            query: `{
                users{
                    username
                    email
                    profilePic
                }
            }`
        },
        {headers:{"auth-token":token}})
        const users = response.data.data.users
        return users
    }
    static async getPosts(){
        const token = localStorage.getItem('token')
        const response =  await axios.post(`${URL}/api`,{
            query: `{
                posts{
                    content
                    postedBy
                }
            }`
        },
        {headers:{"auth-token":token}})
        return response.data.data.posts
    }
}
export default Service