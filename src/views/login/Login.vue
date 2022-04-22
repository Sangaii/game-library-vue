<template>
  <div class="bg">
    <div class="login-content">
      <a-form :model="formState"
              name="basic"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed">
        <a-form-item label="Username"
                     name="username"
                     :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password"
                     name="password"
                     :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <!-- <a-form-item name="remember"
                     :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item> -->
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary"
                    html-type="submit">Log in</a-button>
          <a-button type="link"
                    @click="toRegister">To Register</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { login } from "@/api/Login/index";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

interface FormState {
  username: string;
  password: string;
  // remember: boolean;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const formState = reactive<FormState>({
      username: "",
      password: "",
      // remember: true,
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
      login(values).then((res) => {
        message.warning("66666");
        console.log(res);
      });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    const toRegister = () => {
      router.push("/register");
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      toRegister,
    };
  },
});
</script>

<style scoped>
.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #185abd;
}
.login-content {
  width: 500px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 32px;
  background: #fff;
}
</style>