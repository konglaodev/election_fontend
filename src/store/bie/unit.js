import VillageNumberProvider from '@/bie/resource/village_headman/villages_number_provider.js'

const villageNumberProvider = new VillageNumberProvider()

const state={
    unitData:{},
}

const getters={
    unitData:state=>state.unitData,

}

const mutations={
    setUnit(state,data){
        state.unitData = data;
    },


}

const actions={



    async getUnitOne ({village_number_id}) {
        return await villageNumberProvider.getVillageNumberOne({village_number_id: village_number_id})
    },

    async getUnit ({commit}) {
        const data = await villageNumberProvider.getVillageNumber()

        commit('setUnit', data)

        return data
    },

    async createUnit({dispatch},{
        number

    }){

        let arg={

            number:number,
        }

        await villageNumberProvider.createVillageNumber(arg)
        dispatch('getUnit',{ root: true });
    },

    async updateUnit({dispatch },{
        village_number_id,
        number,

    }){
        console.log(village_number_id)
        console.log(number)
        let arg={
            village_number_id:village_number_id,
            number:number,
        }
        await villageNumberProvider.updateVillageNumber(arg)
        dispatch('getUnit',{ root: true });

        //commit('SET_POST',data)
    },

    async deleteUnit ({dispatch},{village_number_id}) {
        await villageNumberProvider.deleteVillageNumber({village_number_id:village_number_id})
        dispatch('getUnit',{ root: true });

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
