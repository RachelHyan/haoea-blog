<template>
	<div class="layout-sider">
		<div class="logo">
			<div class="title">
				<div>H</div>
				<div>A</div>
				<div>O</div>
				<div>E</div>
				<div>A</div>
			</div>
			<span class="stand"></span>
			<div class="cat">
				<div class="body"></div>
				<div class="head">
					<div class="ear"></div>
					<div class="ear"></div>
				</div>
				<div class="face">
					<div class="nose"></div>
					<div class="whisker-container">
						<div class="whisker"></div>
						<div class="whisker"></div>
					</div>
					<div class="whisker-container">
						<div class="whisker"></div>
						<div class="whisker"></div>
					</div>
				</div>
				<div class="tail-container">
					<div class="tail">
						<div class="tail">
							<div class="tail">
								<div class="tail">
									<div class="tail">
										<div class="tail">
											<div class="tail"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="user">
			<div v-if="!userStore.token" class="user-unlogged" @click="navsStore.goLogin">未登录</div>
			<div v-else class="user-logged" @click="navsStore.activeTab(navsStore.navs.length - 1)">
				<img class="avatar" src="@/assets/WechatIMG69.jpeg" alt="" />
				<div class="name">HaoEa</div>
			</div>
		</div>
		<div class="navs">
			<div
				class="nav"
				:class="{ active: index === navsStore.currentNav }"
				v-for="(nav, index) in navsStore.navs"
				:key="nav.name"
				@click="navsStore.activeTab(index)"
			>
				<div class="nav-content">
					<p>{{ nav.name }}</p>
					<i></i>
				</div>
				<div class="nav-icon">
					<i class="iconfont" :class="nav.icon"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {useNavsStore} from '@/store/navs';
import {useUserStore} from '@/store/user'

export default defineComponent({
	name: "LayoutSider",
	setup() {
		const navsStore = useNavsStore();
		const userStore = useUserStore();

		onMounted(() => {
			navsStore.currentNav = sessionStorage.getItem('currentNav') ? Number(sessionStorage.getItem('currentNav')) : 0;
		})

		return {
			navsStore,
			userStore
		};
	},
});
</script>

<style lang="less">
.layout-sider {
	width: 200px;
	height: 100vh;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;

	.logo {
		height: 100px;
		width: 160px;
		position: relative;
		background-color: #fff;
		margin-top: 20px;
		box-shadow: 0 4px 10px #ddeeffc4;
		border-radius: 18px;
		box-sizing: border-box;
		user-select: none;

		.title {
			font-size: 18px;
			font-weight: 600;

			div {
				position: absolute;
			}

			div:nth-child(1) {
				top: 25px;
				left: 5px;
				transform: translate(0, 0);
			}
			div:nth-child(2) {
				top: 10px;
				left: 40px;
			}
			div:nth-child(3) {
				top: 0;
				left: 75px;
			}
			div:nth-child(4) {
				top: 0;
				left: 110px;
			}
			div:nth-child(5) {
				top: 10px;
				left: 145px;
			}
		}

		.stand {
			position: absolute;
			top: 90px;
			left: 0;
			// transform: translate(-50%);
			height: 10px;
			width: 100%;
			border-radius: 20px;
			background-color: #f7fbfb;
			z-index: 2;
		}

		.cat {
			width: 100px;
			height: 50px;
			position: absolute;
			top: 40px;
			left: 45px;
			border-top-left-radius: 100px;
			border-top-right-radius: 100px;

			.body {
				width: 100px;
				height: 50px;
				background-color: #000;
				position: absolute;
				border-top-left-radius: 100px;
				border-top-right-radius: 100px;
				animation: body 12s none infinite;
			}

			.head {
				content: "";
				width: 70px;
				height: 35px;
				background-color: #000;
				position: absolute;
				top: calc(50% - 10px);
				left: -40px;
				border-top-left-radius: 80px;
				border-top-right-radius: 80px;

				.ear {
					position: absolute;
					left: 4px;
					top: -4px;
					width: 0;
					height: 0;
					border-left: 12px solid transparent;
					border-right: 12px solid transparent;
					border-bottom: 20px solid #000;
					transform: rotate(-30deg);
					animation: left-ear 12s both infinite;

					+ .ear {
						animation: right-ear 12s both infinite;
						top: -12px;
						left: 30px;
					}
				}
			}

			.face {
				.nose {
					position: absolute;
					bottom: 10px;
					left: -10px;
					background-color: #fd6e72;
					height: 5px;
					width: 5px;
					border-radius: 50%;
				}

				.whisker-container {
					position: absolute;
					bottom: 5px;
					left: -36px;
					width: 20px;
					height: 10px;
					transform-origin: right;
					animation: left-whisker 12s both infinite;

					&:nth-child(2) {
						left: -20px;
						bottom: 12px;
						transform-origin: right;
						transform: rotate(180deg);
						animation: right-whisker 12s both infinite;
					}

					.whisker {
						position: absolute;
						top: 0;
						width: 100%;
						border: 1px solid #fdf9de;
						transform-origin: 100% 0;
						transform: rotate(10deg);

						&:last-child {
							top: 0;
							transform: rotate(-20deg);
						}
					}
				}
			}

			.tail-container {
				position: absolute;
				right: 0;
				bottom: -13px;
				z-index: 3;

				.tail {
					position: absolute;
					height: 30px;
					width: 14px;
					bottom: -10px;
					right: 0;
					border-bottom-right-radius: 5px;
					background: #000;
					z-index: 0;

					> .tail {
						animation: tail 12s none infinite;
						height: 100%;
						width: 14px;
						transform-origin: left;
						border-bottom-left-radius: 20px 20px;
						border-bottom-right-radius: 20px 20px;
						border-top-right-radius: 40px;
					}
				}
			}

			@keyframes body {
				6.66667% {
					transform: scaleY(1);
				}
				10% {
					transform: scaleY(1.15);
				}
				16.6667% {
					transform: scaleY(1);
				}
				20% {
					transform: scaleY(1.25);
				}
				26.6667% {
					transform: scaleY(1);
				}
				46.6667% {
					transform: scaleY(1.15);
				}
				53.3333% {
					transform: scaleY(1);
				}
				56.6667% {
					transform: scaleY(1.15);
				}
				// 63.3333% {
				// 	transform: scaleY(1);
				// }
				// 66.6667% {
				// 	transform: scaleY(1.25);
				// }
				// 73.3333% {
				// 	transform: scaleY(1);
				// }
				// 76.6667% {
				// 	transform: scaleY(1.15);
				// }
				// 83.3333% {
				// 	transform: scaleY(1);
				// }
				// 86.6667% {
				// 	transform: scaleY(1.25);
				// }
				// 93.3333% {
				// 	transform: scaleY(1);
				// }
				// 96.6667% {
				// 	transform: scaleY(1.15);
				// }
				// 100% {
				// 	transform: scaleY(1);
				// }
			}

			@keyframes left-ear {
				0% {
					transform: rotate(-20deg);
				}
				6.66667% {
					transform: rotate(-6deg);
				}
				13.3333% {
					transform: rotate(-15deg);
				}
				26.6667% {
					transform: rotate(-15deg);
				}
				33.3333% {
					transform: rotate(-30deg);
				}
				40% {
					transform: rotate(-30deg);
				}
				46.6667% {
					transform: rotate(0deg);
				}
				53.3333% {
					transform: rotate(0deg);
				}
				60% {
					transform: rotate(-15deg);
				}
				80% {
					transform: rotate(-15deg);
				}
				93.3333% {
					transform: rotate(-6deg);
				}
				100% {
					transform: rotate(-6deg);
				}
			}

			@keyframes right-ear {
				0% {
					transform: rotateZ(-16deg);
				}
				6.66667% {
					transform: rotateZ(-16deg);
				}
				13.3333% {
					transform: rotateZ(-19deg);
				}
				26.6667% {
					transform: rotateZ(-19deg);
				}
				33.3333% {
					transform: rotateZ(-30deg);
				}
				36.6667% {
					transform: rotateZ(-19deg);
				}
				37.3333% {
					transform: rotateZ(-30deg);
				}
				38% {
					transform: rotateZ(-19deg);
				}
				40% {
					transform: rotateZ(-19deg);
				}
				40.6667% {
					transform: rotateZ(-30deg);
				}
				41.3333% {
					transform: rotateZ(-19deg);
				}
				46.6667% {
					transform: rotateZ(-9deg);
				}
				53.3333% {
					transform: rotateZ(-9deg);
				}
				60% {
					transform: rotateZ(-19deg);
				}
				60.6667% {
					transform: rotateZ(-30deg);
				}
				61.3333% {
					transform: rotateZ(-19deg);
				}
				62.6667% {
					transform: rotateZ(-19deg);
				}
				63.3333% {
					transform: rotateZ(-30deg);
				}
				64% {
					transform: rotateZ(-19deg);
				}
				80% {
					transform: rotateZ(-19deg);
				}
				93.3333% {
					transform: rotateZ(-16deg);
				}
				100% {
					transform: rotateZ(-16deg);
				}
			}

			@keyframes right-whisker {
				0.66667% {
					transform: rotate(180deg);
				}
				10% {
					transform: rotate(190deg);
				}
				16.6667% {
					transform: rotate(180deg);
				}
				20% {
					transform: rotate(175deg);
				}
				26.6667% {
					transform: rotate(190deg);
				}
				46.6667% {
					transform: rotate(180deg);
				}
				53.3333% {
					transform: rotate(185deg);
				}
				56.6667% {
					transform: rotate(175deg);
				}
			}

			@keyframes left-whisker {
				0.66667% {
					transform: rotate(0deg);
				}
				10% {
					transform: rotate(0deg);
				}
				16.6667% {
					transform: rotate(-5deg);
				}
				20% {
					transform: rotate(0deg);
				}
				26.6667% {
					transform: rotate(0deg);
				}
				46.6667% {
					transform: rotate(10deg);
				}
				53.3333% {
					transform: rotate(-5deg);
				}
				56.6667% {
					transform: rotate(10deg);
				}
			}

			@keyframes tail {
				6.66667% {
					transform: rotate(0deg);
				}
				10% {
					transform: rotate(10deg);
				}
				16.6667% {
					transform: rotate(-5deg);
				}
				20% {
					transform: rotate(30deg);
				}
				26.6667% {
					transform: rotate(-2deg);
				}
				46.6667% {
					transform: rotate(10deg);
				}
				53.3333% {
					transform: rotate(-5deg);
				}
				56.6667% {
					transform: rotate(10deg);
				}
			}
		}
	}

	.user {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #eaeaea;
		margin-top: 30px;
		font-size: 14px;
		text-align: center;
		font-weight: 800;
		cursor: pointer;

		&-unlogged {
			line-height: 50px;
		}

		&-logged {
			.avatar {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
	}

	.navs {
		margin: 30px 0;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		height: calc(100vh - 210px);

		.nav {
			flex: 1;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			user-select: none;
			cursor: pointer;
			width: 100%;

			&-content {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				p {
					font-weight: 800;
					font-size: 16px;
					color: #252a34;
					transform: translateY(-100%);
					transition: all 0.5s;
					opacity: 0;
				}

				i {
					margin-top: 2px;
					width: 5px;
					height: 5px;
					border-radius: 50%;
					background: #252a34;
					transform: translateY(100%);
					transition: all 0.5s;
					opacity: 0;
				}
			}

			&-icon {
				transition: all 0.25s;
				opacity: 1;

				i {
					font-size: 34px;
				}
			}

			&:hover,
			&.active {
				border-right: 4px solid #252a34;

				p {
					transform: translateY(0);
					opacity: 1;
				}

				i {
					transform: translateY(0);
					opacity: 1;
				}

				.iconfont {
					opacity: 0;
				}
			}
		}
	}
}
</style>
