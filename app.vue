<script setup lang="ts">
// dependencies
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid';
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  EyeIcon, 
  EyeSlashIcon 
} from '@heroicons/vue/24/outline';

// components
import Heading from '@/components/Heading.vue'
import Input   from '@/components/Input.vue'
import Link    from '@/components/Link.vue'

// setup vars
const email          = ref('');
const password       = ref('');
const inputType      = ref('password');
const isShowPassword = ref(false);

// methods
function toggleShowPassword() {
  isShowPassword.value = !isShowPassword.value;
  inputType.value      = isShowPassword.value ? 'text' : 'password'
}

</script>

<template>
  <div class="w-full h-screen flex items-center bg-[#191816]">
    <div class="w-[572px] h-[512px] mx-16 px-28 py-14 bg-[#24221F]">
      <Heading>
        <template #icon> <ArrowRightOnRectangleIcon class="w-6 h-6 text-[#FFC632]" /> </template>
      </Heading>

      <form class="flex flex-col gap-5 mt-6">
        <Input 
          v-model:value="email" 
          label="E-mail" 
          type="email" 
          clearable
          :prepend-icon="EnvelopeIcon"
          placeholder="Digite seu e-mail" 
        />
        
        <Input 
          v-model:value="password" 
          label="Senha" 
          :type="inputType"
          :prepend-icon="LockClosedIcon"
          :append-icon="isShowPassword ? EyeIcon : EyeSlashIcon"
          placeholder="Digite sua senha" 
          @click:append="toggleShowPassword"
        />

        <div class="flex justify-between">
          <div>
            <input id="inputCheckbox" type="checkbox">
            <label for="inputCheckbox" class="text-normal ml-1">Lembre-me</label>
          </div>

          <Link to="/" label="Esqueci minha senha" />
        </div>

        <button class="bg-highlight w-full h-12 rounded font-semibold text-lg text-[#47340]">
          Entrar
        </button>

        <p class="text-highlight font-normal text-sm text-center">
          Não tem uma conta?
          <Link to="/" label="Registre-se" />
        </p>
      </form>
    </div>
    <div class="flex-1 bg-red-200">imagem</div>
  </div>
</template>
