<template>
  <div class="bg">
    <div class="login-content">
      <a-form :model="formState"
              class="form"
              name="basic"
              :label-col="{ span: 7 }"
              :wrapper-col="{ span: 16 }"
              :rules="rules"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed">
        <a-form-item label="Username"
                     name="username">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password"
                     name="password">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item label="Repeat"
                     name="rePassword">
          <a-input-password v-model:value="formState.rePassword" />
        </a-form-item>

        <!-- <a-form-item name="remember"
                     :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item> -->
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary"
                    html-type="submit">Register</a-button>
          <a-button type="link"
                    @click="toLogin">To Login</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import { register } from "@/api/Login/index";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

interface FormState {
  username: string;
  password: string;
  rePassword: string;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const formState = reactive<FormState>({
      username: "",
      password: "",
      rePassword: "",
    });
    let validateRepeat = async (_rule: Rule, value: string) => {
      console.log(value);
      if (value === "") {
        return Promise.reject("Please input the password again");
      } else if (value !== formState.password) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };
    const rules: Record<string, Rule[]> = {
      username: [{ required: true, message: "Please input your username!" }],
      password: [{ required: true, message: "Please input your password!" }],
      rePassword: [{ validator: validateRepeat, trigger: "change" }],
    };
    const onFinish = (values: any) => {
      console.log("Success:", values);
      register(values)
        .then((res) => {
          console.log(res);
          if (res.status === "0") {
            message.error(res.msg);
          } else {
            message.warning(res.msg);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    const toLogin = () => {
      router.push("/login");
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      toLogin,
      rules,
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
.form {
  padding: 16px 20px 16px 0;
}
</style>