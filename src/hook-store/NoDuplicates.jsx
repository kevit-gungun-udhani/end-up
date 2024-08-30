const names = ['Newbie', 'Rahul'];
const noDuplicateName = [];

export function useNoDuplicate(){
    let index = Math.floor(Math.random() * names.length);
    console.log(index);
    

    if(noDuplicateName.length > 0){
        const res = noDuplicateName.filter((prevName) => prevName === names[index]).length;
        if(res > 0){
            let temp = Math.floor(Math.random() * names.length);
            if(temp === index){
                if(index === names.length - 1){
                    temp = 0;
                }else{
                    temp = temp + 1;
                }
            }
            noDuplicateName.push(names[temp]);
            return names[temp];
        }
    }

    noDuplicateName.push(names[index]);
    return names[index];
}