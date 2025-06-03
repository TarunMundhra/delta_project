let btn = document.querySelector("button");
btn.addEventListener("click",async() =>{
    let country = document.querySelector("input").value;
    console.log(country);
    // let colArr = await getCollege(country);
    let colArr = await getCollegebyState();
    const filtered = colArr.filter(u => u['state-province'] === country);
    show(filtered);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of colArr){ 
        let li = document.createElement('li');
        li.innerText = college.name;
        list.appendChild(li);
        console.log(college.name);
    }
}


// function showstatecol(colArr,country){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(college of colArr){ 
//         if(college.state-province)
//         if(college.state-province == country){   
//         let li = document.createElement('li');
//         li.innerText = college.name;
//         list.appendChild(li);
//         console.log(college.name);
//         }
//     }
// };
let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
        // return res;
    }
    catch(err){
        console.log(`ERROR - ${err}`);
        return [];
    }
}
async function getCollegebyState(){
    try{
        let res = await axios.get(url + "india");
        console.log(res.data);
        return res.data;
        // for(state of res.data){
        //     if(state.)
        // };
        // return res;
    }
    catch(err){
        console.log(`ERROR - ${err}`);
        return [];
    }
}
