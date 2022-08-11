import HttpRequest from '@/bie/resource/http_request.js'


//const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NDc0NTE3LCJleHAiOjE2Mzc0NzgxMTd9.s6MGXug5OwyEDvW6J3xmbCZxGKrAIFllEWk2y0KuIyDHCW8UFL66HZxSBmZASsFuLi_jbrsVofqTeyVv01y7-Gacoq1bFlQnwiGGGVPksyc9_n6Y5VfkK3SgHnve6VyrMLdFA6-e2U24-9W9rzal0nTsQTN0ggt_zuSmVBLjW_kW0aXUfeero0krD08EQexPi9CwZlcJdswhYq1VmkHPExobl2gdLbF8AijfXd09V_jw_RvIZX-_RasAtVn6OY76pLAbOAL2QJwfzoTjhGNfMgvZiSbdEh8X3Ksde8DA7AIv180Gq9BiAY5GbHRv46NcnQvY7CGlZoeodY5Eku0M1g'

class CandidatesProvider extends HttpRequest {
    constructor () {
        // api api
        super()
    }


    async getCandidateOne({candidates_id}) {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('Candidate/'+candidates_id)

        return data
    }

    async getCandidate () {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('Candidate')

        return data
    }

    async createCandidate({

                              name,
                              surname,
                              gender,
                              dateOfBirth,
                              degree,
                              slogan,
                              history,
                              address,
                              image

                          })
    {

        var bodyFormData = new FormData();
        bodyFormData.append('name',name);
        bodyFormData.append('surname',surname);
        bodyFormData.append('gender',gender);
        bodyFormData.append('dateOfBirth',dateOfBirth);
        bodyFormData.append('degree',degree);
        bodyFormData.append('slogan',slogan);
        bodyFormData.append('history',history);
        bodyFormData.append('address',address);
        bodyFormData.append('image',image);

        this.setHeader({
            'Content-Type': 'multipart/form-data',
        })
        const {data} = await this.create('Candidate',bodyFormData)


        return data
    }

    async updateCandidate(
        {
            candidate_id,
            name,
            surname,
            gender,
            dateOfBirth,
            degree,
            slogan,
            history,
            address,
            image

        }
    ){
        var bodyFormData = new FormData();
        bodyFormData.append('name',name);
        bodyFormData.append('surname',surname);
        bodyFormData.append('gender',gender);
        bodyFormData.append('dateOfBirth',dateOfBirth);
        bodyFormData.append('degree',degree);
        bodyFormData.append('slogan',slogan);
        bodyFormData.append('history',history);
        bodyFormData.append('address',address);
        bodyFormData.append('image',image);
        bodyFormData.append('_method','put');
        this.setHeader({
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'accplication/json',
        })

        const {data} = await this.update('Candidate/'+candidate_id,bodyFormData)


        return data
    }


    async deleteCandidate ({candidate_id}) {

        this.setHeader({})

        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.delete('Candidate/'+candidate_id)

        return data
    }
}

export default CandidatesProvider