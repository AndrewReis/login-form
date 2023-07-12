<script setup lang="ts">
// import { ZodError, z } from "zod";
import { XCircleIcon } from '@heroicons/vue/24/outline';

type Emits = {
  (e: 'update:value', value: string): void;
  (e: 'click:append', value: string): void;
};

const emit = defineEmits<Emits>();

withDefaults(defineProps<{
  value: string | number | boolean;
  label: string;
  appendIcon?: any;
  prependIcon?: any;
  rules?: Array<any>;
  clearable?: boolean;
}>(), {
  prependIcon: false,
  appendIcon: false,
  clearable: false
});


const input        = ref<HTMLInputElement>();
const isFoucused   = ref(false);
const isFilled     = ref(false);
const isError      = ref(false);
const errorMessage = ref('Digite um E-mail válido');

// methods
function setInputFocus() {
  isFoucused.value = true
}

function inputBlur() {
  isFoucused.value = false

  if (input.value?.value.length === 0) {
    isFilled.value = false;
  } else {
    isFilled.value = true;
  }
}

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  // const data   = validateValue(target.type, target.value);
  
  // if (data.status === 'error') {
  //   isError.value      = true;
  //   errorMessage.value = data.value;
  // } else {
  //   isError.value = false;
  // }

  emit('update:value', target.value);
}

function clearValue() {
  isFilled.value = false;
  emit('update:value', '');
}

function clickAppendIcon() {
  emit('click:append', '');
}

// function validateValue(type: string, value: string): ValidateValue {
//   let validation = {} as z.ZodString;
//   const data: ValidateValue = {
//     status: 'error',
//     value: ''
//   }

//   if (type === 'email') {
//     validation = z.string().email('Digite um E-mail válido');
//   }

//   try {
//     data.value  = validation.parse(value);
//     data.status = 'success';
//   } catch (error) {
//     const err   = error as ZodError;
//     data.value  = err.errors[0].message;
//     data.status = 'error'
//   }

//   return data;
// }
</script>


<template>
  <div class="flex flex-col gap-1">
    <label :for="label" class="text-base text-normal"> {{ label }} </label>
    <div 
      :class="[(isFoucused || isFilled) ? 'border-highlight' : 'border-normal', isError && 'border-red-500']"
      class="flex items-center gap-2 pl-3 pr-2 h-11 border-2 rounded-sm hover:border-highlight transition duration-200">

      <component :is="prependIcon" :class="[(isFoucused || isFilled) ? 'text-highlight' : 'text-normal', 'w-5 h-5']" />

      <input 
        ref="input" 
        :value="value" :id="label" v-bind="$attrs"
        class="flex-1 h-full border-none outline-none bg-transparent text-white" 
        @focus="setInputFocus" 
        @blur="inputBlur"
        @input="updateValue" 
      />

      <button v-if="clearable" type="button" class="cursor-pointer" @click="clearValue">
        <XCircleIcon class="w-5 h-5 text-normal" />
      </button>

      <button v-if="appendIcon" type="button" class="cursor-pointer" @click="clickAppendIcon">
        <component :is="appendIcon" class="w-5 h-5 text-normal" />
      </button>
    </div>

    <span v-if="isError" class="text-red-500">
      {{ errorMessage }}
    </span>
  </div>
</template>