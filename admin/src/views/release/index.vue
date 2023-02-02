<template>
	<div class="release">
		<input class="title" type="text" placeholder="标题" v-model="title" />
		<div class="editor" style="border: 1px solid #ccc">
			<Toolbar
				style="border-bottom: 1px solid #ccc"
				:editor="editorRef"
				:defaultConfig="toolbarConfig"
				:mode="mode"
			/>
			<Editor
				style="height: 350px; overflow-y: hidden"
				v-model="valueHtml"
				:defaultConfig="editorConfig"
				:mode="mode"
				@onCreated="handleCreated"
			/>
		</div>
		<select class="type" v-model="selected">
			<option v-for="option in options" :value="option.value">{{ option.label }}</option>
		</select>
		<div class="ab-bg">
			<textarea class="abstract" cols="30" rows="10" placeholder="文章摘要" v-model="abstract"></textarea>
			<div class="bg" @click="fileUpload">
				<input type="file" accept="image/*" ref="imageFile" @change="getImageFile" v-show="false">
				<p v-if="true">{{imgData ? imgData : '封面图片'}}</p>
				<img v-else :src="imgData" alt="">
			</div>
		</div>
		<button class="btn" @click="submit">发布</button>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	onBeforeUnmount,
	shallowRef,
	onMounted,
	ref,
} from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css";
import API from "@/api";

export default defineComponent({
	name: "release",
	components: {
		Editor,
		Toolbar,
	},
	setup() {
		// 编辑器实例，必须用 shallowRef
		const editorRef = shallowRef();
		const title = ref("");
		// 内容 HTML
		const valueHtml = ref("<p>hello</p>");
		const selected = ref("请选择分类");
		const abstract = ref("");
		const options = ref([
			{ value: "前端", label: "前端" },
			{ value: "算法", label: "算法" },
		]);
		const imageFile = ref()
		const imgData = ref()

		// 模拟 ajax 异步获取内容
		// onMounted(() => {
		// 	setTimeout(() => {
		// 		valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
		// 	}, 1500);
		// });

		const toolbarConfig = {
			excludeKeys: [
				'fullScreen'
			]
		};
		const editorConfig = { placeholder: "请输入内容..." };

		// 组件销毁时，也及时销毁编辑器
		onBeforeUnmount(() => {
			const editor = editorRef.value;
			if (editor == null) return;
			editor.destroy();
		});

		const handleCreated = (editor: any) => {
			editorRef.value = editor; // 记录 editor 实例，重要！
		};

		const fileUpload = () => {
			imageFile.value.click()
		}

		const getImageFile = (e:any) => {
			const file = e.target.files[0]
			imgData.value = file.name
		}

		const submit = async () => {
			console.log(valueHtml.value);
			
			try {
				const res = await API.addArticle({
					title: title.value,
					content: valueHtml.value,
					type: selected.value,
					abstract: abstract.value,
					image: imgData.value
				})
				console.log(res);
			} catch (error) {
				console.log(error);
			}};

		return {
			imageFile,
			imgData,
			editorRef,
			title,
			valueHtml,
			selected,
			abstract,
			options,
			mode: "default", // 或 'simple'
			toolbarConfig,
			editorConfig,
			handleCreated,
			getImageFile,
			fileUpload,
			submit,
		};
	},
});
</script>

<style scoped lang="less">
.release {
	padding: 30px;

	.title {
		width: 100%;
		height: 40px;
		outline: none;
		border: 1px solid #ccc;
		margin-bottom: 20px;
		padding: 0 10px;

		&::placeholder {
			color: #ccc;
		}
	}

	.type {
		width: 100%;
		height: 40px;
		outline: none;
		border: 1px solid #ccc;
		margin-top: 20px;
		padding: 0 10px;
	}

	.ab-bg {
		display: flex;
		height: 200px;
		margin-top: 20px;
		.abstract {
			width: 50%;
			height: 100%;
			outline: none;
			border: 1px solid #ccc;
			margin-bottom: 20px;
			padding: 10px;
			resize: none;
			margin-right: 20px;

			&::placeholder {
				color: #ccc;
			}
		}

		.bg {
			width: 40%;
			height: 100%;
			outline: none;
			border: 1px solid #ccc;
			margin-bottom: 20px;
			padding: 10px;
			resize: none;
			text-align: center;
			line-height: 200px;
			color: #ccc;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.btn {
		width: 200px;
		height: 40px;
		outline: none;
		border: none;
		margin-top: 20px;
		padding: 0 10px;
	}
}
</style>
