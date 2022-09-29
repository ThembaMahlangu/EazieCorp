import { v4 as uuidv4 } from 'uuid';

let apartments = [
    {
        id: "1",
        name: "Quorum",
        apartment: "Urban circle"
    },
    {
        id: "2",
        name: "Quorum",
        apartment: "Urban circle"
    }
];


export const getUsers = (req, res)=>{

    res.send(apartments);

}

export const CreateUser = (req, res)=>{

    const user = req.body;
    const userWithId = {  id: uuidv4(), ... user}
    apartments.push(userWithId )
    res.send("Post Reached");

}

export const getSingleUser = (req, res)=>{
    const {id} = req.params;
    const findUser = apartments.find((user) => user.id === id);
    res.send(findUser);

}

export const deleteUser = (req, res) => {

    const {id} = req.params;
    apartments = apartments.filter((user)=> user.id != id);
    res.send("User deleted") 

}

export const updateUser = (req, res)=>{
    const {id} = req.params;
    const { name, apartment} = req.body;
    const user = apartments.find((user) => user.id === id);
  
    if(name) user.name = name;

    if(apartment) user.apartment = apartment;
    res.send(apartments)
    
}

