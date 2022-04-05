
import "antd/dist/antd.css";
import{Table, Button,Modal,Input} from "antd";
import{useState} from 'react';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
function Utilisateur() {
   
const [IsEditing, setIsEditing] = useState(false)
const [editingStudent, setEditingStudent] = useState(null) 
const [dataSource,  setDataSource] = useState([
{
    id:1,
   name:'john',
   email:'john@gmail.com',
   address:'john address',

},
   
    
    {
        id:2,
        name:'David',
        email:'David@gmail.com',
        address:'David address',
        
            },
            {
                id:3,
                name:'James',
                email:'James@gmail.com',
                address:'James address',
                
                    },
                    {
                        id:4,
                        name:'Sam',
                        email:'Sam@gmail.com',
                        address:'Sam address',
                        
                            },

])
    const columns =[
        {
           key:'1',
            title:'ID',
            dataIndex:'id',
        },
        {
            key:'2',
             title:'Name',
             dataIndex:'name',
         },
         {
            key:'3',
             title:'Email',
             dataIndex:'email',
         },
         {
            key:'4',
             title:'Address',
             dataIndex:'address',
         },
         {
             key:"5",
             title:'Actions',
             render:(record) =>{
                 return<>
                 <EditOutlined onClick={()=>{
                onEditStudent(record);
                 }}/>
                 <DeleteOutlined onClick={()=>{
                     onDeleteStudent(record)
                 }}style={{color:"red",marginLeft:12}}/>
                 </>
             }
         }
    ]
    const onAddStudent=()=>{
        const randomNumber =parseInt(Math.random() *1000);
    const newStudent={
        id: randomNumber,
        name:"Name"+ randomNumber,
        email:randomNumber +"@gmail.com",
        address:"Address"+ randomNumber,
        
    };
        setDataSource(pre=>{
            return[...pre, newStudent];
        });
    };
    const onDeleteStudent=(record)=>{
        Modal.confirm({
            title:'Are you sure, you want to delete this user record?',
            okText:'Yes',
            okType: "danger",
            onOk:()=>{
                setDataSource(pre=>{
                    return  pre.filter(Student=>Student.id !== record.id)
                  });
            }
        })
    
    }
  const onEditStudent=(record)=>{
  setIsEditing(true);
  setEditingStudent({...record})
  };
  const resetediting =(record)=>{
    setIsEditing(false)
    setEditingStudent(null)
  }
    return(
<div className="App">
    <header className="App-header">
        <div class=" py-18">
        
        <center><Button onClick={onAddStudent} class="inline-block text-red-500 italic py-12 align-middle ml-28 w-28">Add new User</Button></center>
        <Table columns= {columns} dataSource={dataSource}> </Table>
        <Modal
        title="Edit user"
        visible={IsEditing}
        okText="save"
        onCancel={()=>{
            resetediting()
            
        }}
        onOk={()=>{ 
            setDataSource(pre=>{
                return pre.map(Student=>{
                    if (Student.id===editingStudent.id){
                        return editingStudent
                    }else{
                        return Student;
                    }

                })
            })
            resetediting()
        }}
        >
        
      <Input value={editingStudent?.name} onChange={(e)=>{
          setEditingStudent(pre=>{
              return{...pre, name:e.target.value}
          })
      }}/>
      <Input value={editingStudent?.email} onChange={(e)=>{
          setEditingStudent(pre=>{
              return{...pre, email:e.target.value}
          })
        }}/>
      <Input value={editingStudent?.address}onChange={(e)=>{
          setEditingStudent(pre=>{
              return{...pre, address:e.target.value}
          })
        }}/> 
        </Modal>
        </div>
    </header>
</div>


    );
}

export default Utilisateur;