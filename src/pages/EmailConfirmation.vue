<template>
  <q-page padding>
   <p>Obrigado por se registrar!</p>
   <p> Por favor, confirme seu e-mail para concluir o cadastro: <strong>{{ $route.query.email }}</strong></p>
   <q-btn
                label="Voltar ao Login"
                color="primary"
                class="full-width"
                flat
                :to="{ name: 'login' }"
                size="sm"
              />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailConfirmationPage'
})
</script>
