<template>
  <q-page padding>
      <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
        <p class="col-12 text-h5 text-center">Redefinir Senha</p>
        <div class="col-md1 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-input
            label="Nova Senha"
            v-model="password"
             outlined
            />

            <div class="full-width q-pt-md q-gutter-y-sm">
              <q-btn
                label="Redefinir"
                color="primary"
                class="full-width"
                type="submit"
                outline
              />
            </div>
        </div>
      </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'ResetPasswordPage',
  setup () {
    const { resetPassword } = useAuthUser()
    const router = useRouter()
    const route = useRoute()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      await resetPassword(token, password.value)
      router.push({ name: 'login' })
    }

    return {
      password,
      handlePasswordReset
    }
  }
})
</script>
