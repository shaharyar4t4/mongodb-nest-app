# MONOGO DB with NEST JS TOPICES

1. Learning about the Mongo db like How to connect with mongo db.
2. Learning about how to make a schemas in Mongo DB
3. Learning about how to make RESTFUL API (POST, GET, PATCH, DELETE and PUT)
4. Learning about the Relationship and Techniques like (Embededing and References)<br><br>
   4.1 =>  One to one Relationship by using the Embeding<br> 
   4.2 =>  One to one Relationship by using the Reference ID<br>
   4.3 =>  One to Many Relationship by using the Embeding<br>
   4.4 =>  One to Many Relationship by using the Reference ID<br>
   4.5 =>  Many to many Relationship by using the Embeding<br>



MongoDB Connection Issue - Simple Explanation
Masla kya tha? (What was the problem?) Imagine aap ko kisi dost ke ghar jana hai, aur uske ghar ka naam "Villa A" hai.<br><br>

Normal situation: Aap Google Maps pe "Villa A" likhte hain, aur wo apko rasta dikha deta hai.<br><br>
Aapka Masla: Aapka internet provider (MAP) "Villa A" (short address) ko pehchan nahi paa raha tha. Wo Keh raha tha "Mujhe nahi pata ye kahan hai".<br><br>
Short Address: mongodb+srv://... (Ye wo "Villa A" wala naam tha jo kaam nahi kar raha tha).<br><br>
Maine kya kiya? (What did I do?)

Maine Google se pooch kar uska Pura Address (Exact Location) nikal liya. Example: "Villa A" nahi, balkay "House No 5, Street 10, Block C".<br><br>
Maine ap ki settings (.env file) mein wo Pura Address likh diya.<br><br>
Ab kya hoga? (What happens now?) Ab ap ka computer "Villa A" dhundne ki koshish nahi karega. Us ke paas seedha "House No 5..." likha hua hai, toh wo direct connect ho jayega.<br><br>

Ye "Pura Address" Maine Kese Nikala? (How I found this address)<br><br>
Agar kabhi apko khud ye address nikalna pare, toh ye steps hain:<br><br>

Chota Address (SRV) lo: Apke paas ye tha: cluster0.v6vwg9o.mongodb.net<br><br>

Google se Poocho (NSLOOKUP): Mera computer (aur apka bhi) isko nahi parh pa raha tha. Maine ek command use ki Google DNS ke sath: nslookup -type=SRV _mongodb._tcp.cluster0.v6vwg9o.mongodb.net 8.8.8.8<br><br>

Jawab Mila (Shard Names): Google ne mujhe bataya ke is "Chote Address" ke peeche ye 3 computers hain:<br><br>

00: ac-dt3vrxw-shard-00-00.v6vwg9o.mongodb.net<br><br>
01: ac-dt3vrxw-shard-00-01.v6vwg9o.mongodb.net<br><br>
02: ac-dt3vrxw-shard-00-02.v6vwg9o.mongodb.net<br><br>
Jod diya (Combine): Maine in teeno ko comma (,) se mila kar apka naya address bana diya: mongodb://USER:PASS@...00...,...01...,...02.../?ssl=true&replicaSet=...<br><br>