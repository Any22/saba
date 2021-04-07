//input the installed package 
//read this :https://google-auth.readthedocs.io/en/latest/reference/google.auth.jwt.html
//link for scopes (access rights : read , write , update)
//https://developers.google.com/identity/protocols/googlescopes
const {google} = require ('googleapis');
const keys = require ('./keys.json');

//1. Connection will be established through client 
const client = new google.auth.JWT(keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']

);

client.authorize(function(err,tokens){
    if (err){
        console.log(err);
        return;                                                  //return at this point will take out of this function
    }
    //else block works when we are connected 
    else{
        console.log('Connected!');
        gsrun(client);
    }
}
);
//2. Read data from spreadsheet

async function gsrun(cl){                                        //google sheet run , cl is short for client
const gsapi =google.sheets({version:'v4',auth:cl});              //version of google sheets plus client that's connected above 
try{
//option object 
const opt ={
  spreadsheetId :'1zUZkA_AkhyUVTqm3B5suxsjqcNWV4XLMwAYaAbol4jE',
  range : 'Data!A1:B5'
};

let data= await gsapi.spreadsheets.values.get(opt);
let dataArray=data.data.values;                                 //data variable property and values are storing in array variable 

let newDataArray = dataArray.map(function(row){                 // map method return a new array so storing it in a newDataArray variable 
row.push(row[0] + '-' + row[1]);                                // adding thrid column at the end of array by pushing
return row;
});    
console.log(newDataArray);    

//updating the spreadsheet now 
const updateValues ={
  spreadsheetId :'1zUZkA_AkhyUVTqm3B5suxsjqcNWV4XLMwAYaAbol4jE',
  range : 'Data!E2',
  valueInputOption : 'USER_ENTERED',
  resource : { values : newDataArray}
};
let res = await gsapi.spreadsheets.values.update(updateValues);
// console.log(res);

} catch(e){
    console.error(e);
}

}


