import React, { useState, useEffect, useReducer } from 'react'
import { Table, Button, Pagination, } from 'antd'
import axios from '../../axios'
import reducer from '../../store/reducer'
// import { getSourceList } from '../../store/actionCreators'

const columns = [
  {
    title: '集团ID',
    dataIndex: 'id',
  },
  {
    title: '集团名称',
    dataIndex: 'name',
  },
  {
    title: '集团账号',
    dataIndex: 'account',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
  },
  {
    title: '操作',
    render: (text, record) => (
      <span>
        <Button type="primary">重置密码</Button>
      </span>
    ),
  },
]

const Group = (props) => {

  const [ dataList, setDataList ] = useState([])
  const [ submitData, setSubmitData ] = useState({
    page: 0,
    size: 10,
    total: 0,
    searchName: null,
  })

  const [state, dispatch] = useReducer(reducer, {name: 'zdd'})

  function pageChange (page) {

    setSubmitData({
      ...submitData,
      page,
    })
    // setTimeout(load, 3000)
    console.log(page, submitData)
  }

  useEffect(() => {

    ((async function load() {

      try {

        const { data } =  await axios.get('users')

        if (data.status) {

          console.log(data.data)

          setDataList(data.data)
          // setSubmitData({
          //   ...submitData,
          //   total: +data.total,
          // })
        }
      } catch(e) {

        console.log(e, 'load error')
      }
    })())
    // dispatch(getSourceList())
  }, [])

  return (
    <div>
      { state.name }
      <Table bordered columns={ columns } dataSource={ dataList } rowKey={(record, index) => index} pagination={ false } />

      <div className="pageBar">
        <Pagination defaultCurrent={ submitData.page + 1 } pageSize={ submitData.size } total={ submitData.total } showTotal={ total => `共 ${total} 条` } onChange={ pageChange } />
      </div>
    </div>
  )
}

export default Group