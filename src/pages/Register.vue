<template>
  <q-page padding>
      <q-form class="row justify-center" @submit.prevent="handleRegister">
        <p class="col-12 text-h5 text-center">Registrar-se</p>
        <div class="col-md1 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
            label="Nome"
            v-model="form.name"
            outlined
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Nome inválido!']"

            />

          <q-input
            label="E-mail"
            v-model="form.email"
             outlined
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'E-mail inválido!']"
            type="email"
            />

            <q-input
            label="Senha"
            v-model="form.password"
            outlined
            lazy-rules
            :rules="[ val => val && val.length >= 6 || 'Senha inválida!']"
            />

            <div class="full-width q-pt-md q-gutter-y-sm">
              <q-btn
                label="Registrar-se"
                color="primary"
                class="full-width"
                type="submit"
                outline
              />
              <q-btn
                label="Voltar"
                color="primary"
                class="full-width"
                flat
                :to="{ name: 'login' }"
                size="sm"
              />
            </div>
        </div>
      </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RegisterPage',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const { notifySuccess, notifyError } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
        notifySuccess('Registro efetuado com sucesso!')
      } catch (error) {
        // alert(error)
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
