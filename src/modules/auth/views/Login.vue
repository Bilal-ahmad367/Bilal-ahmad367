<template>
  <div>
    <div class="absolute inset-0">
      <img
        src="/assets/images/auth/bg-gradient.png"
        alt="image"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-4 dark:bg-[#060818] sm:px-16"
    >
      <img
        src="/assets/images/auth/coming-soon-object1.png"
        alt="image"
        class="absolute left-0 top-1/2 h-full max-h-[603px] -translate-y-1/2"
      />
      <img
        src="/assets/images/auth/coming-soon-object2.png"
        alt="image"
        class="absolute left-24 top-0 h-40 md:left-[30%]"
      />
      <img
        src="/assets/images/auth/coming-soon-object3.png"
        alt="image"
        class="absolute right-0 top-0 h-[300px]"
      />
      <img
        src="/assets/images/auth/polygon-object.svg"
        alt="image"
        class="absolute bottom-0 end-[28%]"
      />
      <div
        class="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[650px] lg:flex-row lg:gap-10 xl:gap-0"
      >
        <div
        class="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(0,83,200,4)_0%,rgba(42,215,255,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]"
        >
          <div
            class="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"
          ></div>
          <div class="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
            <router-link to="/" class="w-48 block lg:w-72 ms-10">
              <img
                src="/assets/images/optimus-logo.png"
                alt="Logo"
                  class="w-64 pl-16 mt-10"
              />
            </router-link>
            <div class="mt-24 hidden w-full max-w-[430px] lg:block">
              <img
                src="/assets/images/auth/login.svg"
                alt="Cover Image"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div
          class="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]"
        >
          <div
            class="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full"
          >
          <router-link to="/" class="w-8 block lg:hidden">
              <img
                src="/assets/images/auth/logo.png"
                alt="Logo"
                class="mx-auto w-10"
              />
            </router-link>
            <div class="dropdown ms-auto w-max">
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
                "
                offsetDistance="8"
              >
                <button
                  type="button"
                  class="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                >
                  <div>
                    <img
                      :src="currentFlag"
                      alt="image"
                      class="h-5 w-5 rounded-full object-cover"
                    />
                  </div>
                  <div class="text-base font-bold uppercase">
                    {{ store.locale }}
                  </div>
                  <span class="shrink-0">
                    <icon-caret-down />
                  </span>
                </button>
                <template #content="{ close }">
                  <ul
                    class="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]"
                  >
                    <template
                      v-for="item in store.languageList"
                      :key="item.code"
                    >
                      <li>
                        <button
                          type="button"
                          class="w-full hover:text-primary"
                          :class="{
                            'bg-primary/10 text-primary':
                              i18n.locale === item.code,
                          }"
                          @click="changeLanguage(item), close()"
                        >
                          <img
                            class="w-5 h-5 object-cover rounded-full"
                            :src="`/assets/images/flags/${item.code.toUpperCase()}.svg`"
                            alt=""
                          />
                          <span class="ltr:ml-3 rtl:mr-3">{{ item.name }}</span>
                        </button>
                      </li>
                    </template>
                  </ul>
                </template>
              </Popper>
            </div>
          </div>
          <div class="w-full max-w-[440px] lg:mt-16">
            <div class="mb-10">
              <h1
                class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl"
              >
                Sign in
              </h1>
              <p class="text-base font-bold leading-normal text-white-dark">
                Enter your email and password to login
              </p>
            </div>

            <!-- FORM DATA -->
            <form class="space-y-5 dark:text-white" @submit.prevent="login">
              <!-- Email Field Validation -->
              <div
                :class="{
                  'has-error': $v.form.email.$error,
                  'has-success': isSubmitLogin && !$v.form.email.$error,
                }"
              >
                <label for="Email">Email</label>
                <div class="relative text-white-dark">
                  <input
                    v-model.trim="$v.form.email.$model"
                    id="Email"
                    type="email"
                    placeholder="Enter Email"
                    class="form-input ps-10 placeholder:text-white-dark"
                  />
                  <span class="absolute start-4 top-1/2 -translate-y-1/2">
                    <icon-mail :fill="true" />
                  </span>
                </div>
                <template v-if="isSubmitLogin && !$v.form.email.$error">
                  <p class="text-[#1abc9c] mt-1">Valid Email!</p>
                </template>
                <template v-if="isSubmitLogin && $v.form.email.$error">
                  <p class="text-danger mt-1">Please enter a valid email</p>
                </template>
              </div>

              <!-- Password Field Validation -->
              <div
                :class="{
                  'has-error': $v.form.password.$error,
                  'has-success': isSubmitLogin && !$v.form.password.$error,
                }"
              >
                <label for="Password">Password</label>
                <div class="relative text-white-dark">
                  <input
                    v-model.trim="$v.form.password.$model"
                    id="Password"
                    type="password"
                    placeholder="Enter Password"
                    class="form-input ps-10 placeholder:text-white-dark"
                  />
                  <span class="absolute start-4 top-1/2 -translate-y-1/2">
                    <icon-lock-dots :fill="true" />
                  </span>
                </div>
                <template v-if="isSubmitLogin && !$v.form.password.$error">
                  <p class="text-[#1abc9c] mt-1">Valid Password!</p>
                </template>
                <template v-if="isSubmitLogin && $v.form.password.$error">
                  <p class="text-danger mt-1">Password is required</p>
                </template>
              </div>
              <div>
                <router-link
                  to="/forgot-password"
                  class="text-blue-500 text-base block hover:underline"
                  >Forgot Password?</router-link
                >
              </div>
              <!-- Error Message -->
              <template v-if="errorMessage">
                <p class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
              </template>
              <!-- Submit Button -->
              <button
                type="submit"
                class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                >
                <!-- Show Sign In text when loader is false -->
                <span v-if="!loader">Sign In</span>

                <!-- Show Loader when loader is true -->
                <div v-if="loader" class="flex justify-center">
                  <LoaderIcon class="animate-spin h-5 w-5 text-white" />
                </div>
              </button>
            </form>

            <div class="relative my-7 text-center md:mb-9">
              <span
                class="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"
              ></span>
              <span
                class="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light"
                >or</span
              >
            </div>

            <!-- social media icons -->
            <div class="mb-10 md:mb-[60px]">
              <ul class="flex justify-center gap-3.5 text-white">
                <li>
                  <a
                    href="javascript:"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(0, 83, 200, 1) 0%,
                        rgba(42, 215, 255, 1) 100%
                      );
                    "
                  >
                    <icon-google />
                  </a>
                </li>

                <li>
                  <a
                    href="javascript:"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(0, 83, 200, 1) 0%,
                        rgba(42, 215, 255, 1) 100%
                      );
                    "
                  >
                    <Iconlinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center dark:text-white">
              Don't have an account ?
              <router-link
                to="/register"
                class="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
              >
                SIGN UP
              </router-link>
            </div>
          </div>
          <p class="absolute bottom-6 w-full text-center dark:text-white">
            © {{ new Date().getFullYear() }}.VRISTO All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT CODE  -->
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import appSetting from "@/app-setting";
import { useAppStore } from "@/core/store/index";
import { useRouter } from "vue-router";
import { useMeta } from "@/core/composables/use-meta";
import { useVuelidate } from "@vuelidate/core";
import LoaderIcon from "@/core/components/icon/icon-loader.vue";
import Iconlinkedin from "@/core/components/icon/icon-linkedin.vue";
import IconGoogle from "@/core/components/icon/icon-google.vue";

import { required, email, minLength } from "@vuelidate/validators";
import IconCaretDown from "@/core/components/icon/icon-caret-down.vue";
import IconMail from "@/core/components/icon/icon-mail.vue";
import IconLockDots from "@/core/components/icon/icon-lock-dots.vue";
import { Login } from "@/modules/auth/composables/useAuth";

// meta tag for page title
useMeta({ title: "Login Cover" });

const router = useRouter();
const store = useAppStore();
const loader = ref(false);
const errorMessage = ref(null);
const isSubmitLogin = ref(false);
const form = reactive({
  email: "",
  password: "",
});

// multi language
const i18n = reactive(useI18n());
const changeLanguage = (item: any) => {
  i18n.locale = item.code;
  appSetting.toggleLanguage(item);
};
const currentFlag = computed(() => {
  return `/assets/images/flags/${i18n.locale.toUpperCase()}.svg`;
});

// Validation Rules for Login Form
const rules = {
  form: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
};

// Initialize validation
const $v = useVuelidate(rules, { form });

// Login function to submit the form
const login = async () => {
  isSubmitLogin.value = true;
  $v.value.$touch(); // Trigger validation on submit
  if ($v.value.$invalid) {
    return false; // Prevent submission if form is invalid
  }

  const postData = { email: form.email, password: form.password };
  loader.value = true;
  errorMessage.value = null;

  try {
    await Login(postData); // Call the login function
    router.push("/dashboard"); // Redirect on successful login
  } catch (err: any) {
    // Display error message if login fails
    errorMessage.value = err.response?.data?.message || "Request failed";
    console.error("Login failed:", err);
  } finally {
    loader.value = false;
  }
};
</script>
