import HttpRequest from '@/bie/resource/http_request.js'


//const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NDc0NTE3LCJleHAiOjE2Mzc0NzgxMTd9.s6MGXug5OwyEDvW6J3xmbCZxGKrAIFllEWk2y0KuIyDHCW8UFL66HZxSBmZASsFuLi_jbrsVofqTeyVv01y7-Gacoq1bFlQnwiGGGVPksyc9_n6Y5VfkK3SgHnve6VyrMLdFA6-e2U24-9W9rzal0nTsQTN0ggt_zuSmVBLjW_kW0aXUfeero0krD08EQexPi9CwZlcJdswhYq1VmkHPExobl2gdLbF8AijfXd09V_jw_RvIZX-_RasAtVn6OY76pLAbOAL2QJwfzoTjhGNfMgvZiSbdEh8X3Ksde8DA7AIv180Gq9BiAY5GbHRv46NcnQvY7CGlZoeodY5Eku0M1g'

class UserProvider extends HttpRequest {
    constructor () {
        // api api
        super()
    }


    async getUserOne ({user_id}) {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('getuserid/'+user_id)

        return data
    }

    async getUser () {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('getalluser')

        return data
    }

    async createUser({

                                name,
                                phoneNumber,
                                role_id

                            })
    {
        let arg={
            name:name,
            phoneNumber:phoneNumber,
            role_id:role_id

        }

        this.setHeader({
           
        })
        const {data} = await this.create('adduser',arg)


        return data
    }

    async updateUser(
        {
            user_id,

            phoneNumber:phoneNumber,
            role_id:role_id

        }
    ){
        let arg={

            phoneNumber:phoneNumber,
            role_id:role_id

        }

        this.setHeader({
            'Content-Type': 'application/x-www-form-urlencoded',
        })

        const {data} = await this.update('edituserrole/'+user_id,arg)

        return data
    }


    // async deleteUser ({user_id}) {
    //
    //     this.setHeader({})
    //
    //     // example path http://172.28.26.82:7001/this.get()
    //     const {data} = await this.delete('deleteusers/'+user_id)
    //
    //     return data
    // }
}

export default UserProvider