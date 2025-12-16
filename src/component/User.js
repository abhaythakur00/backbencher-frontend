import React from 'react'
import '../css/user.css'
import {Link} from 'react-router-dom'
function User() {
  return (
    <div>
        <div className="user-con-1">
    <h1>User</h1>
    <div class="user-con-box-3">
    <input type="filter" placeholder="filter by user"/>
    <div class="user-dabba-1">
        <div class="user-dabba">
            New users
        </div>
        <div class="user-dabba">
            Voters
        </div>
        <div class="user-dabba">
            Editors
        </div>
        <div class="user-dabba">
            Reputation
        </div>
      
    </div>

      
</div>
<div className="user-con-2">
    <table>
        <tr id='heding'>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>xyz</th>
            </tr>
           
       <tr>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td> 

        </tr> 
        <tr>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td> 

        </tr> 
        <tr>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td>
<td>abhay</td> 

        </tr>    
    
  
    
    </table>
    </div>
        </div>
    </div>
  )
}

export default User