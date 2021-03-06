# tgg-table-scroll

项目内部有个table的滚动需求，
于是封装了一个，方便以后再用，语言是react

## Install
    # With npm
    npm install tgg-table-scroll
    # With yarn
    yarn add tgg-table-scroll

## Props

props目前有4个: width, height, columns, data,

  |            API    |说明     | 必填  |类型                       |默认值
  |----------|---------------------|--------------|---------------|-------------------------------
  |width|`组件的宽度`     |false       |string            |'100%'
  |height          |`组件的高度`  |false          |number            |250
  |listItemHeight          |`listItem高度`     |false      |number            |50
  |columns          |`表格列的配置`|false |ColumnsType[]|-
  |data          |`数据数组`|false |object[]|-
  |handleHover          |`hover事件回调key`|false |Function|-
  |currentTopIndex          |`回调顶部listItem key` |false|Function|- 

<br>
 
## ColumnsType[]
列配置项是固定的，目前必传字段 name 和 width

|             API   |说明                          |类型                       |默认值
|----------------|-------------------------------|-----------------------------|-------------------------------
|name|`列名称`            |string            |-
|width          |`列的宽度`            |string            |-

<br>  


    const columns: ColumnsType = [
	    { name: '排名', width: '20%' },
	    { name: '平台名称', width: '50%' },
	    { name: '综合指数, width: '30%' },
    ]
    
## Data[]
数据配置项【不是固定的字段】，用户可根据自己业务的需求，【随意传入】需要的字段，代码内部做了遍历，列项将全部渲染出来，以下是个示例:

<br>

|            API    |说明                          |类型                       |默认值
|----------------|-------------------------------|-----------------------------|-------------------------------
|order|`排名`            |string|            |-
|platName          |`平台名称`            |string            |-
|cpIndex          |`综合指数`            |string            |-

<br>  

    const columns: ColumnsType = [
	    { order:1 platName:'mockData1111111',cpIndex:'0.4857' },
	    { order:2 platName:'mockData2222222',cpIndex:'0.3956' },
	    { order:3 platName:'mockData3333333',cpIndex:'0.3615' },
	    { order:4 platName:'mockData4444444',cpIndex:'0.4857' },
	    { order:5 platName:'mockData5555555',cpIndex:'0.3165' },
	    { order:6 platName:'mockData6666666',cpIndex:'0.517' },
	    { order:7 platName:'mockData7777777',cpIndex:'0.6111 },
	    { order:8 platName:'mockData8888888',cpIndex:'0.3591' },
	    { order:9 platName:'mockData9999999',cpIndex:'0.2166' },
    ]

## 引用示例

    <TggTableScroll
	    width="60%"
	    height={250}
	    listItemHeight={50}
	    columns={columns}
	    data={addKey(shortParkList)}
	    handleHover={handleHover}
	    currentTopIndex={currentTopIndex}
      clickHandler={clickHandler}
    />
  
<br>

![Image text](https://raw.githubusercontent.com/china78/tgg-table-scroll/main/src/assets/demo.png)