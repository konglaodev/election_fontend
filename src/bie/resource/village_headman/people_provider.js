import HttpRequest from '@/bie/resource/http_request.js'


//const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NDc0NTE3LCJleHAiOjE2Mzc0NzgxMTd9.s6MGXug5OwyEDvW6J3xmbCZxGKrAIFllEWk2y0KuIyDHCW8UFL66HZxSBmZASsFuLi_jbrsVofqTeyVv01y7-Gacoq1bFlQnwiGGGVPksyc9_n6Y5VfkK3SgHnve6VyrMLdFA6-e2U24-9W9rzal0nTsQTN0ggt_zuSmVBLjW_kW0aXUfeero0krD08EQexPi9CwZlcJdswhYq1VmkHPExobl2gdLbF8AijfXd09V_jw_RvIZX-_RasAtVn6OY76pLAbOAL2QJwfzoTjhGNfMgvZiSbdEh8X3Ksde8DA7AIv180Gq9BiAY5GbHRv46NcnQvY7CGlZoeodY5Eku0M1g'

class PeopleProvider extends HttpRequest {
    constructor () {
        // api api
        super()
    }

    async getImageUrl({imageUrl}) {
        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get(imageUrl)

        return data
    }
    async getPeopleOne({people_id}) {
        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('populations/'+people_id)

        return data
    }

    async getPeople () {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('populations/')

        return data
    }

    async createPeople({

                              name,
                              surname,
                              gender,
                              dateOfBirth,
                              cencus_id,
                              phoneNumber,
                              address,
                              image

                          })
    {

        console.log(cencus_id)

        var bodyFormData = new FormData();
        bodyFormData.append('name',name);
        bodyFormData.append('surname',surname);
        bodyFormData.append('gender',gender);
        bodyFormData.append('dateOfBirth',dateOfBirth);

        bodyFormData.append('phoneNumber',phoneNumber);
        bodyFormData.append('cencus_id',cencus_id);
        bodyFormData.append('address',address);
        bodyFormData.append('image',image);

        this.setHeader({
            'Content-Type': 'multipart/form-data',
        })
        const {data} = await this.create('populations',bodyFormData)


        return data
    }

    async updatePeople(
        {
            people_id,
            name,
            surname,
            gender,
            dateOfBirth,
            cencus_id,
            phoneNumber,
            address,
            image

        }
    ){
        console.log(image);
        var bodyFormData = new FormData();
        bodyFormData.append('name',name);
        bodyFormData.append('surname',surname);
        bodyFormData.append('gender',gender);
        bodyFormData.append('dateOfBirth',dateOfBirth);
        bodyFormData.append('cencus_id',cencus_id);
        bodyFormData.append('phoneNumber',phoneNumber);
        bodyFormData.append('address',address);
        bodyFormData.append('image',image);
        bodyFormData.append('_method','put');
        this.setHeader({
            'Content-Type': 'multipart/form-data',
        })

        const {data} = await this.create('populations/'+people_id,bodyFormData)


        return data
    }


    async deletePeople ({people_id}) {

        this.setHeader({})

        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.delete('populations/'+people_id)

        return data
    }
}

export default PeopleProvider