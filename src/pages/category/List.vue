<template>
    <q-page padding>
        <div class="row">
            <q-table
                :rows="categories"
                :columns="columns"
                row-key="name"
                class="col-12"
            >
            <template v-slot:top>
              <span class="text-h6">
                Categorias
              </span>
              <q-space />
              <q-btn
                label= "Adicionar Novo"
                color="primary">
              </q-btn>
            </template>
            <template v-slot:body-cell-actions="props">
        <q-td class="q-gutter-x-sm" :props="props">
          <q-btn icon="mdi-pencil-outline" color="primary" dense>
            <q-tooltip>
          Editar
             </q-tooltip>
          </q-btn>
          <q-btn icon="mdi-delete-outline" color="negative" dense>
            <q-tooltip>
          Excluir
             </q-tooltip>
          </q-btn>
        </q-td>
      </template>
            </q-table>
          </div>
    </q-page>
</template>
<script>
const columns = [
  { name: 'name', align: 'left', label: 'Nome', field: 'name', sortable: true },
  { name: 'actions', align: 'right', label: 'Ações', field: 'action', sortable: true }
]

import { defineComponent, ref, onMounted } from 'vue'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageCategoryList',
  setup () {
    const categories = ref([])
    const loading = ref(true)
    const { list } = useApi()
    const { notifyError } = useNotify()

    const handleListCategories = async () => {
      try {
        loading.value = true
        categories.value = await list('category')
        loading.value = false
      } catch (error) {
        notifyError(error.message)
      }
    }

    onMounted(() => {
      handleListCategories()
    }
    )

    return {
      columns,
      categories,
      loading
    }
  }
})
</script>
