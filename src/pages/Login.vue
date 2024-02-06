<template>
  <q-page padding>
      <q-form class="row justify-center" @submit.prevent="handleLogin">
        <p class="col-12 text-h5 text-center">Login</p>
        <div class="col-md1 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
            label="Email"
            v-model="form.email"
            outlined
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'E-mail inválido!']"
            type="email"
            />

            <q-input
            label="Password"
            v-model="form.password"
            outlined
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Senha inválida!']"
            />

            <div class="full-width q-pt-md">
              <q-btn
                label="Login"
                color="primary"
                class="full-width"
                type="submit"
                outline
              />
            </div>
            <div class="full-width q-gutter-y-sm">
              <q-btn
                label="Registrar-se"
                color="primary"
                class="full-width"
                type="submit"
                flat
                to="/register"
                size="sm"
              />

              <q-btn
                label="Esqueci minha senha"
                color="primary"
                class="full-width"
                type="submit"
                flat
                :to="{ name: 'forgot-password' }"
                size="sm"
              />
            </div>
        </div>
      </q-form>
  </q-page>
</template>

<script>
import useAuthUser from 'src/composables/UseAuthUser'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const router = useRouter()

    const { login } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login efetuado com sucesso!')
        router.push({ name: 'me' })
      } catch (error) {
        // alert(error.message)
        notifyError(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
