<script setup>
import { useUserProfileStore } from '@/stores/user-profile'

const profileStore = useUserProfileStore()
const { updateProfileNames } = profileStore

/**
 * useFormFields is a custom hook for form state and behavior.
 * @constant formFields - Holds the current state of the form fields.
 * @constant formRef - A reference to the form element.
 * @constant changed - Indicates whether any form fields have been changed.
 * @constant sync - Synchronizes the current form field values with the initial values.
 * @constant reset - Resets the form fields back to their initial values.
 */

const { formFields, formRef, changed, sync, reset } = useFormFields(profileStore, 'profile.names')

/**
 * Validation rules for profile names. Each field must be a non-empty string.
 */

const rules = {
  firstName: [createValidationRule('Name is required')],
  lastName: [createValidationRule('Last name is required')],
}

/**
 * @function submitForm - Submits the form and saves profile settings.
 * @constant loading - Indicates if the form is being submitted.
 */

const { submitForm, loading } = validateAndSave()

// The order in which the form fields are displayed.
const orderedKeys = ['firstName', 'lastName']
</script>

<template>
  <div>
    <VForm ref="formRef" @keyup.esc="reset" @submit.prevent="submitForm($event, updateProfileNames, formFields, sync)">
      <SettingsCard :kbd="changed" subtitle="Tell us who you are 🙂" title="Display Name">
        <VRow>
          <VCol v-for="key in orderedKeys" :key="key" cols="12" sm="6">
            <VTextField v-model.trim="formFields.names[key]" :label="key" :rules="rules[key]" counter maxlength="16" />
          </VCol>
        </VRow>

        <template #footer>
          <VSpacer />
          <SettingsButton v-show="changed" light title="Reset" @click="reset" />
          <SettingsButton :disabled="!changed" :loading="loading" submit title="Save" />
        </template>
      </SettingsCard>
    </VForm>
  </div>
</template>
