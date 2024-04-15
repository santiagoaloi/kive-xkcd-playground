/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const GoogleAuthProvider: typeof import('firebase/auth')['GoogleAuthProvider']
  const Yup: typeof import('yup')
  const addDoc: typeof import('firebase/firestore')['addDoc']
  const arrayUnion: typeof import('firebase/firestore')['arrayUnion']
  const auth: typeof import('@/firebase')['auth']
  const axios: typeof import('axios')['default']
  const capitalize: typeof import('./utils/methods')['capitalize']
  const cloneDeep: typeof import('lodash-es')['cloneDeep']
  const collection: typeof import('firebase/firestore')['collection']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createNewDocumentService: typeof import('./services/firebase-service')['createNewDocumentService']
  const createUserWithEmailAndPassword: typeof import('firebase/auth')['createUserWithEmailAndPassword']
  const createValidationRule: typeof import('./utils/validations')['createValidationRule']
  const createVuetify: typeof import('vuetify')['createVuetify']
  const customRef: typeof import('vue')['customRef']
  const db: typeof import('@/firebase')['db']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const deleteDoc: typeof import('firebase/firestore')['deleteDoc']
  const doc: typeof import('firebase/firestore')['doc']
  const editRoute: typeof import('./utils/routing')['editRoute']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getDoc: typeof import('firebase/firestore')['getDoc']
  const getDocs: typeof import('firebase/firestore')['getDocs']
  const getDocumentByIdService: typeof import('./services/firebase-service')['getDocumentByIdService']
  const getDocumentsByFieldValueService: typeof import('./services/firebase-service')['getDocumentsByFieldValueService']
  const getDocumentsByIdService: typeof import('./services/firebase-service')['getDocumentsByIdService']
  const getIdToken: typeof import('firebase/auth')['getIdToken']
  const h: typeof import('vue')['h']
  const handleUpdateProfileNames: typeof import('./services/user-profile/actions/update-profile-names')['handleUpdateProfileNames']
  const inject: typeof import('vue')['inject']
  const isArray: typeof import('lodash-es')['isArray']
  const isEmpty: typeof import('lodash-es')['isEmpty']
  const isEqual: typeof import('lodash-es')['isEqual']
  const isFunction: typeof import('lodash-es')['isFunction']
  const isObject: typeof import('lodash-es')['isObject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const omit: typeof import('lodash-es')['omit']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onSnapshot: typeof import('firebase/firestore')['onSnapshot']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const pushToArrayFieldService: typeof import('./services/firebase-service')['pushToArrayFieldService']
  const query: typeof import('firebase/firestore')['query']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const removeItemFromArrayService: typeof import('./services/firebase-service')['removeItemFromArrayService']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const saveUserProfileService: typeof import('./services/user-profile/user-profile-service')['saveUserProfileService']
  const setDoc: typeof import('firebase/firestore')['setDoc']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const signInWithEmailAndPassword: typeof import('firebase/auth')['signInWithEmailAndPassword']
  const signInWithPopup: typeof import('firebase/auth')['signInWithPopup']
  const signOut: typeof import('firebase/auth')['signOut']
  const snackbar: typeof import('./utils/toast')['snackbar']
  const stores: typeof import('./stores/index')['default']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const updateDoc: typeof import('firebase/firestore')['updateDoc']
  const updateDocumentService: typeof import('./services/firebase-service')['updateDocumentService']
  const uploadFileService: typeof import('./services/firebase-service')['uploadFileService']
  const useAppStore: typeof import('./stores/app')['useAppStore']
  const useAttrs: typeof import('vue')['useAttrs']
  const useAuthStore: typeof import('./stores/auth')['useAuthStore']
  const useComicsStore: typeof import('./stores/comics')['useComicsStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useCurrentUser: typeof import('vuefire')['useCurrentUser']
  const useDisplay: typeof import('vuetify')['useDisplay']
  const useFirebaseAuth: typeof import('vuefire')['useFirebaseAuth']
  const useFormFields: typeof import('./composables/form-fields')['useFormFields']
  const useResetRef: typeof import('./composables/reset-ref')['useResetRef']
  const useRoute: typeof import('vue-router/auto')['useRoute']
  const useRouteQuery: typeof import('@vueuse/router')['useRouteQuery']
  const useRouter: typeof import('vue-router/auto')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useTheme: typeof import('vuetify')['useTheme']
  const useUserProfileStore: typeof import('./stores/user-profile')['useUserProfileStore']
  const validateAndSave: typeof import('./utils/stores')['validateAndSave']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
  const where: typeof import('firebase/firestore')['where']
  const yup: typeof import('yup')
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
  import('vue')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly GoogleAuthProvider: UnwrapRef<typeof import('firebase/auth')['GoogleAuthProvider']>
    readonly Yup: UnwrapRef<typeof import('yup')>
    readonly addDoc: UnwrapRef<typeof import('firebase/firestore')['addDoc']>
    readonly arrayUnion: UnwrapRef<typeof import('firebase/firestore')['arrayUnion']>
    readonly auth: UnwrapRef<typeof import('@/firebase')['auth']>
    readonly axios: UnwrapRef<typeof import('axios')['default']>
    readonly capitalize: UnwrapRef<typeof import('./utils/methods')['capitalize']>
    readonly cloneDeep: UnwrapRef<typeof import('lodash-es')['cloneDeep']>
    readonly collection: UnwrapRef<typeof import('firebase/firestore')['collection']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createNewDocumentService: UnwrapRef<typeof import('./services/firebase-service')['createNewDocumentService']>
    readonly createUserWithEmailAndPassword: UnwrapRef<typeof import('firebase/auth')['createUserWithEmailAndPassword']>
    readonly createValidationRule: UnwrapRef<typeof import('./utils/validations')['createValidationRule']>
    readonly createVuetify: UnwrapRef<typeof import('vuetify')['createVuetify']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly db: UnwrapRef<typeof import('@/firebase')['db']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly deleteDoc: UnwrapRef<typeof import('firebase/firestore')['deleteDoc']>
    readonly doc: UnwrapRef<typeof import('firebase/firestore')['doc']>
    readonly editRoute: UnwrapRef<typeof import('./utils/routing')['editRoute']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getDoc: UnwrapRef<typeof import('firebase/firestore')['getDoc']>
    readonly getDocs: UnwrapRef<typeof import('firebase/firestore')['getDocs']>
    readonly getDocumentByIdService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentByIdService']>
    readonly getDocumentsByFieldValueService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentsByFieldValueService']>
    readonly getDocumentsByIdService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentsByIdService']>
    readonly getIdToken: UnwrapRef<typeof import('firebase/auth')['getIdToken']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly handleUpdateProfileNames: UnwrapRef<typeof import('./services/user-profile/actions/update-profile-names')['handleUpdateProfileNames']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isArray: UnwrapRef<typeof import('lodash-es')['isArray']>
    readonly isEmpty: UnwrapRef<typeof import('lodash-es')['isEmpty']>
    readonly isEqual: UnwrapRef<typeof import('lodash-es')['isEqual']>
    readonly isFunction: UnwrapRef<typeof import('lodash-es')['isFunction']>
    readonly isObject: UnwrapRef<typeof import('lodash-es')['isObject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly omit: UnwrapRef<typeof import('lodash-es')['omit']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onSnapshot: UnwrapRef<typeof import('firebase/firestore')['onSnapshot']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly pushToArrayFieldService: UnwrapRef<typeof import('./services/firebase-service')['pushToArrayFieldService']>
    readonly query: UnwrapRef<typeof import('firebase/firestore')['query']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly removeItemFromArrayService: UnwrapRef<typeof import('./services/firebase-service')['removeItemFromArrayService']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly saveUserProfileService: UnwrapRef<typeof import('./services/user-profile/user-profile-service')['saveUserProfileService']>
    readonly setDoc: UnwrapRef<typeof import('firebase/firestore')['setDoc']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly signInWithEmailAndPassword: UnwrapRef<typeof import('firebase/auth')['signInWithEmailAndPassword']>
    readonly signInWithPopup: UnwrapRef<typeof import('firebase/auth')['signInWithPopup']>
    readonly signOut: UnwrapRef<typeof import('firebase/auth')['signOut']>
    readonly snackbar: UnwrapRef<typeof import('./utils/toast')['snackbar']>
    readonly stores: UnwrapRef<typeof import('./stores/index')['default']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly updateDoc: UnwrapRef<typeof import('firebase/firestore')['updateDoc']>
    readonly updateDocumentService: UnwrapRef<typeof import('./services/firebase-service')['updateDocumentService']>
    readonly uploadFileService: UnwrapRef<typeof import('./services/firebase-service')['uploadFileService']>
    readonly useAppStore: UnwrapRef<typeof import('./stores/app')['useAppStore']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useAuthStore: UnwrapRef<typeof import('./stores/auth')['useAuthStore']>
    readonly useComicsStore: UnwrapRef<typeof import('./stores/comics')['useComicsStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useCurrentUser: UnwrapRef<typeof import('vuefire')['useCurrentUser']>
    readonly useDisplay: UnwrapRef<typeof import('vuetify')['useDisplay']>
    readonly useFirebaseAuth: UnwrapRef<typeof import('vuefire')['useFirebaseAuth']>
    readonly useFormFields: UnwrapRef<typeof import('./composables/form-fields')['useFormFields']>
    readonly useResetRef: UnwrapRef<typeof import('./composables/reset-ref')['useResetRef']>
    readonly useRoute: UnwrapRef<typeof import('vue-router/auto')['useRoute']>
    readonly useRouteQuery: UnwrapRef<typeof import('@vueuse/router')['useRouteQuery']>
    readonly useRouter: UnwrapRef<typeof import('vue-router/auto')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useTheme: UnwrapRef<typeof import('vuetify')['useTheme']>
    readonly useUserProfileStore: UnwrapRef<typeof import('./stores/user-profile')['useUserProfileStore']>
    readonly validateAndSave: UnwrapRef<typeof import('./utils/stores')['validateAndSave']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
    readonly where: UnwrapRef<typeof import('firebase/firestore')['where']>
  }
}
declare module '@vue/runtime-core' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly GoogleAuthProvider: UnwrapRef<typeof import('firebase/auth')['GoogleAuthProvider']>
    readonly Yup: UnwrapRef<typeof import('yup')>
    readonly addDoc: UnwrapRef<typeof import('firebase/firestore')['addDoc']>
    readonly arrayUnion: UnwrapRef<typeof import('firebase/firestore')['arrayUnion']>
    readonly auth: UnwrapRef<typeof import('@/firebase')['auth']>
    readonly axios: UnwrapRef<typeof import('axios')['default']>
    readonly capitalize: UnwrapRef<typeof import('./utils/methods')['capitalize']>
    readonly cloneDeep: UnwrapRef<typeof import('lodash-es')['cloneDeep']>
    readonly collection: UnwrapRef<typeof import('firebase/firestore')['collection']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createNewDocumentService: UnwrapRef<typeof import('./services/firebase-service')['createNewDocumentService']>
    readonly createUserWithEmailAndPassword: UnwrapRef<typeof import('firebase/auth')['createUserWithEmailAndPassword']>
    readonly createValidationRule: UnwrapRef<typeof import('./utils/validations')['createValidationRule']>
    readonly createVuetify: UnwrapRef<typeof import('vuetify')['createVuetify']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly db: UnwrapRef<typeof import('@/firebase')['db']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly deleteDoc: UnwrapRef<typeof import('firebase/firestore')['deleteDoc']>
    readonly doc: UnwrapRef<typeof import('firebase/firestore')['doc']>
    readonly editRoute: UnwrapRef<typeof import('./utils/routing')['editRoute']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getDoc: UnwrapRef<typeof import('firebase/firestore')['getDoc']>
    readonly getDocs: UnwrapRef<typeof import('firebase/firestore')['getDocs']>
    readonly getDocumentByIdService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentByIdService']>
    readonly getDocumentsByFieldValueService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentsByFieldValueService']>
    readonly getDocumentsByIdService: UnwrapRef<typeof import('./services/firebase-service')['getDocumentsByIdService']>
    readonly getIdToken: UnwrapRef<typeof import('firebase/auth')['getIdToken']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly handleUpdateProfileNames: UnwrapRef<typeof import('./services/user-profile/actions/update-profile-names')['handleUpdateProfileNames']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isArray: UnwrapRef<typeof import('lodash-es')['isArray']>
    readonly isEmpty: UnwrapRef<typeof import('lodash-es')['isEmpty']>
    readonly isEqual: UnwrapRef<typeof import('lodash-es')['isEqual']>
    readonly isFunction: UnwrapRef<typeof import('lodash-es')['isFunction']>
    readonly isObject: UnwrapRef<typeof import('lodash-es')['isObject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly omit: UnwrapRef<typeof import('lodash-es')['omit']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onSnapshot: UnwrapRef<typeof import('firebase/firestore')['onSnapshot']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly pushToArrayFieldService: UnwrapRef<typeof import('./services/firebase-service')['pushToArrayFieldService']>
    readonly query: UnwrapRef<typeof import('firebase/firestore')['query']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly removeItemFromArrayService: UnwrapRef<typeof import('./services/firebase-service')['removeItemFromArrayService']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly saveUserProfileService: UnwrapRef<typeof import('./services/user-profile/user-profile-service')['saveUserProfileService']>
    readonly setDoc: UnwrapRef<typeof import('firebase/firestore')['setDoc']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly signInWithEmailAndPassword: UnwrapRef<typeof import('firebase/auth')['signInWithEmailAndPassword']>
    readonly signInWithPopup: UnwrapRef<typeof import('firebase/auth')['signInWithPopup']>
    readonly signOut: UnwrapRef<typeof import('firebase/auth')['signOut']>
    readonly snackbar: UnwrapRef<typeof import('./utils/toast')['snackbar']>
    readonly stores: UnwrapRef<typeof import('./stores/index')['default']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly updateDoc: UnwrapRef<typeof import('firebase/firestore')['updateDoc']>
    readonly updateDocumentService: UnwrapRef<typeof import('./services/firebase-service')['updateDocumentService']>
    readonly uploadFileService: UnwrapRef<typeof import('./services/firebase-service')['uploadFileService']>
    readonly useAppStore: UnwrapRef<typeof import('./stores/app')['useAppStore']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useAuthStore: UnwrapRef<typeof import('./stores/auth')['useAuthStore']>
    readonly useComicsStore: UnwrapRef<typeof import('./stores/comics')['useComicsStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useCurrentUser: UnwrapRef<typeof import('vuefire')['useCurrentUser']>
    readonly useDisplay: UnwrapRef<typeof import('vuetify')['useDisplay']>
    readonly useFirebaseAuth: UnwrapRef<typeof import('vuefire')['useFirebaseAuth']>
    readonly useFormFields: UnwrapRef<typeof import('./composables/form-fields')['useFormFields']>
    readonly useResetRef: UnwrapRef<typeof import('./composables/reset-ref')['useResetRef']>
    readonly useRoute: UnwrapRef<typeof import('vue-router/auto')['useRoute']>
    readonly useRouteQuery: UnwrapRef<typeof import('@vueuse/router')['useRouteQuery']>
    readonly useRouter: UnwrapRef<typeof import('vue-router/auto')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useTheme: UnwrapRef<typeof import('vuetify')['useTheme']>
    readonly useUserProfileStore: UnwrapRef<typeof import('./stores/user-profile')['useUserProfileStore']>
    readonly validateAndSave: UnwrapRef<typeof import('./utils/stores')['validateAndSave']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
    readonly where: UnwrapRef<typeof import('firebase/firestore')['where']>
  }
}
