<template>
	<div class="cont">
		<div class="bg" ref="bg"></div>
		<div class="container" ref="container">
			<div class="form sign-in">
				<h2>登录</h2>
				<label>
					<span>账号</span>
					<input type="email" />
				</label>
				<label>
					<span>密码</span>
					<input type="password" />
				</label>
				<p class="forgot-pass">忘记密码?</p>
				<button type="button" class="submit" @click="login">登录</button>
			</div>
			<div class="sub-cont">
				<div class="img">
					<div class="img__text m--up">
						<h2>没有账号嘛</h2>
						<p>快来加入我们吧</p>
					</div>
					<div class="img__text m--in">
						<h2>已经有账号</h2>
						<p>
							赶紧来登录吧
						</p>
					</div>
					<div class="img__btn" @click="handlerImgBtn">
						<span class="m--up">注册</span>
						<span class="m--in">登录</span>
					</div>
				</div>
				<div class="form sign-up">
					<h2>注册</h2>
					<label>
						<span>账号</span>
						<input type="text" />
					</label>
					<label>
						<span>密码</span>
						<input type="password" />
					</label>
					<button type="button" class="submit" @click="register">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import API from "@/api";
import {useUserStore} from '@/store/user';
import {useNavsStore} from '@/store/navs';
import { useRouter } from "vue-router";

export default defineComponent({
	name: "Login",
	setup() {
		const userStore = useUserStore();
		const navsStore = useNavsStore();
		const router = useRouter();
		const bg = ref<HTMLElement | null>();
		const container = ref<HTMLElement | null>();


		const handlerImgBtn = () => {
			container.value?.classList.toggle("s--signup");
			bg.value?.classList.toggle("right");
		};

		const register = async () => {
			const {data} = await API.register('admin', 'admin123')
			console.log(data)
		}

		const login = async () => {
			try{
				const {data} = await API.login('admin', 'admin123')
				userStore.setToken(data.token)
				navsStore.activeTab(0)
			} catch (e) {
				console.log(e)
			}
		}

		return {
			bg,
			container,
			handlerImgBtn,
			register,
			login
		};
	},
});
</script>

<style scoped lang="less">
.cont {
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	.bg {
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-image: url(@/assets/WechatIMG71.jpeg);
		background-size: 200%;
		background-position: center right;
		transition: all 1.2s;
		filter: blur(20px);
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	input,
	button {
		outline: none;
		border: none;
		background: none;
	}

	.container {
		overflow: hidden;
		position: relative;
		width: 800px;
		height: 400px;
		margin: 0 auto;
		background: #fff;
		border-radius: 7px;
		box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.3);

		.form {
			position: relative;
			width: 400px;
			height: 100%;
			transition: transform 1.2s ease-in-out;
			padding: 40px 30px 0;
		}

		.sub-cont {
			overflow: hidden;
			position: absolute;
			left: 400px;
			top: 0;
			width: 800px;
			height: 100%;
			padding-left: 400px;
			background: #fff;
			transition: transform 1.2s ease-in-out;
		}

		button {
			display: block;
			margin: 0 auto;
			width: 260px;
			height: 36px;
			border-radius: 30px;
			color: #fff;
			font-size: 15px;
			cursor: pointer;
		}

		.img {
			overflow: hidden;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
			width: 400px;
			height: 100%;
			padding-top: 260px;

			&::before {
				content: "";
				position: absolute;
				right: 0;
				top: 0;
				width: 800px;
				height: 100%;
				background: #fff;
				background-image: url(@/assets/WechatIMG71.jpeg);
				background-size: cover;
				background-position: center;
				transition: transform 1.2s ease-in-out;
			}

			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}

			&__text {
				z-index: 2;
				position: absolute;
				left: 0;
				top: 50px;
				width: 100%;
				padding: 0 20px;
				text-align: center;
				color: #fff;
				transition: transform 1.2s ease-in-out;

				h2 {
					margin-bottom: 10px;
					font-weight: normal;
				}

				p {
					font-size: 14px;
					line-height: 1.5;
				}
				&.m--in {
					transform: translateX(-800px);
				}
			}

			&__btn {
				overflow: hidden;
				z-index: 2;
				position: relative;
				width: 100px;
				height: 36px;
				margin: 0 auto;
				background: transparent;
				color: #fff;
				font-size: 15px;
				cursor: pointer;

				&::after {
					content: "";
					z-index: 2;
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					border: 2px solid #fff;
					border-radius: 30px;
				}

				span {
					position: absolute;
					left: 0;
					top: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					transition: transform 1.2s;

					&.m--in {
						transform: translateY(-72px);
					}
				}
			}
		}

		h2 {
			width: 100%;
			font-size: 26px;
			text-align: center;
		}

		label {
			display: block;
			width: 260px;
			margin: 25px auto 0;
			text-align: center;

			span {
				font-size: 12px;
				color: #cfcfcf;
			}
		}

		input {
			display: block;
			width: 100%;
			margin-top: 5px;
			font-size: 16px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.4);
			text-align: center;
		}

		.forgot-pass {
			margin-top: 15px;
			text-align: center;
			font-size: 12px;
			color: #cfcfcf;
		}

		.submit {
			margin-top: 40px;
			margin-bottom: 20px;
			background: #d4af7a;
		}

		.fb-btn {
			border: 2px solid #d3dae9;
			color: darken(#d3dae9, 20%);

			span {
				font-weight: bold;
				color: darken(#768cb6, 20%);
			}
		}

		.sign-in {
			transition-timing-function: ease-out;
		}

		.sign-up {
			transform: translate3d(-800px, 0, 0);
		}
	}
	.right {
		background-position: center left;
	}
	.s--signup {
		.sub-cont {
			transform: translate3d(-400px, 0, 0);
		}

		.img {
			&::before {
				transform: translate3d(400px, 0, 0);
			}

			&__text {
				&.m--up {
					transform: translateX(800px);
				}

				&.m--in {
					transform: translateX(0);
				}
			}

			&__btn {
				span {
					&.m--up {
						transform: translateY(72px);
					}

					&.m--in {
						transform: translateY(0);
					}
				}
			}
		}

		.sign-in {
			transition-timing-function: ease-in-out;
			transition-duration: 1.2s;
			transform: translate3d(400px, 0, 0);
		}

		.sign-up {
			transform: translate3d(0, 0, 0);
		}
	}
}
</style>
