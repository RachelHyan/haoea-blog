<template>
	<div class="article">
		<table>
			<thead class="table-head">
				<tr>
					<th>标题</th>
					<th>分类</th>
					<th>阅读数</th>
					<th>创建时间</th>
					<th>更新时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<tr v-for="item in list" :key="item.id" @click="handleTr(item.id)" :class="{active: item.id === currentId}">
					<td>
						{{item.title}}
					</td>
					<td>{{item.type}}
					</td>
					<td>{{item.read_count}}</td>
					<td>{{item.create_time}}</td>
					<td>{{item.updated_time}}</td>
					<td>
							<a href="javascript:;">编辑</a>
							<a href="javascript:;" @click="delArticle(item.id)">删除</a>
						</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import API from '@/api';

export default defineComponent({
	name: 'ArticleIndex',
	setup () {
		const currentId = ref()
		const list = ref();
		
		const getList = async () => {
			const {data} = await API.getArticleList()
			data.data.forEach((item:any) => {
				item.create_time = new Date(item.create_time).toLocaleString()
				item.updated_time = item.updated_time && new Date(item.updated_time).toLocaleString()
			})
			list.value = data.data
		}

		const delArticle = async (id:number) => {
			const {data} = await API.deleteArticle(id)
			console.log('delArticle',data);
			
			if (data.code === 200) {
				getList()
			}
		}

		const handleTr = (id:number) => {
			currentId.value = id
			console.log('handleTr',id)
		}

		getList()
		

		return {
			currentId,
			list,
			handleTr,
			delArticle
		}
	}
})
</script>

<style scoped lang="less">
.article {
	overflow: auto;
	padding: 30px;

	table {
		width: 100%;
		border-collapse: collapse;
		.table-head {
			// background-color: #f5f5f5;
			th {
				padding: 10px 0;
				text-align: left;
			}
		}
		.table-body {
			tr {
				border-bottom: 1px solid #f5f5f5;
				cursor: pointer;
				position: relative;
				background-color: #fff;
				transition: background-color .5s;
				// transition: height .5s;

				&:hover {
					background-color: #f5f5f5;
				}

				td {
					padding: 10px 0;

					a {
						margin-right: 10px;
						text-decoration: none;
						color: #1890ff;
					}
				}
			}
		}
	}
}
</style>
