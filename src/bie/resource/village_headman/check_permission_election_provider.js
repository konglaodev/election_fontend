import HttpRequest from '@/bie/resource/http_request.js'


//const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NDc0NTE3LCJleHAiOjE2Mzc0NzgxMTd9.s6MGXug5OwyEDvW6J3xmbCZxGKrAIFllEWk2y0KuIyDHCW8UFL66HZxSBmZASsFuLi_jbrsVofqTeyVv01y7-Gacoq1bFlQnwiGGGVPksyc9_n6Y5VfkK3SgHnve6VyrMLdFA6-e2U24-9W9rzal0nTsQTN0ggt_zuSmVBLjW_kW0aXUfeero0krD08EQexPi9CwZlcJdswhYq1VmkHPExobl2gdLbF8AijfXd09V_jw_RvIZX-_RasAtVn6OY76pLAbOAL2QJwfzoTjhGNfMgvZiSbdEh8X3Ksde8DA7AIv180Gq9BiAY5GbHRv46NcnQvY7CGlZoeodY5Eku0M1g'

class CheckPermissionElectionProvider extends HttpRequest {
    constructor () {
        // api api
        super()
    }


    // async getCensusOne({census_id}) {
    //
    //     //Call setHeader on class HttpRequest and write common header
    //     //If write Header on class HttpRequest Should call like under method
    //     this.setHeader({})
    //     // example path http://172.28.26.82:7001/this.get()
    //     const {data} = await this.get('cencus/'+census_id)
    //
    //     return data
    // }

    async getVerify () {

        //Call setHeader on class HttpRequest and write common header
        //If write Header on class HttpRequest Should call like under method
        this.setHeader({})
        // example path http://172.28.26.82:7001/this.get()
        const {data} = await this.get('showall')

        return data
    }

    // async createCensus({
    //
    //                        cencus_id_ref,
    //                        village_id_ref
    //
    //
    //                    })
    // {
    //
    //
    //     var bodyFormData = new FormData();
    //     bodyFormData.append('cencus_id',cencus_id_ref.toString());
    //     bodyFormData.append('village_id',village_id_ref);
    //
    //     this.setHeader({
    //         'Content-Type': 'multipart/form-data',
    //     })
    //     const {data} = await this.create('cencus',bodyFormData)
    //
    //
    //     return data
    // }

    async updateVerify(
        {
            verify_id,
            user_id,
            status

        }
    ){

        var bodyFormData = new FormData();
        bodyFormData.append('user_id',user_id);
        bodyFormData.append('status',status);

        bodyFormData.append('_method','put');
        this.setHeader({
            'Content-Type': 'multipart/form-data',
        })

        const {data} = await this.create('updatevery/'+verify_id,bodyFormData)


        return data
    }


    // async deleteCensus ({census_id}) {
    //
    //     this.setHeader({})
    //
    //     // example path http://172.28.26.82:7001/this.get()
    //     const {data} = await this.delete('cencus/'+census_id)
    //
    //     return data
    // }
}

export default CheckPermissionElectionProvider