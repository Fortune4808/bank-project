<nav class="fixed w-[230px] h-screen bg-white">
    <div class="mt-[70px]">
        <ul>
            <li class="side-links" onclick="_get_page('dashboard');"><i class="bi-speedometer2 text-[#3a4669] mr-[6px]"></i> Dashboard</li>
            <li class="side-links" id="" onclick="_get_page('all-staff');" title="Admin"><i class="bi-people text-[#3a4669] mr-[6px]"></i> Admin/Staff</li>
            <li class="side-links" onclick="_get_page('all-customer');" title="customer"><i class="bi-people text-[#3a4669] mr-[6px]"></i> All Customers</li>
            <li class="side-links" id="" onclick="_get_page('all-branch');" title=""><i class="bi-bank2 text-[#3a4669] mr-[6px]"></i> All Branches</li>
            <li class="side-links" id="" onclick="_get_page('department-module');" title=""><i class="bi-pc-display-horizontal text-[#3a4669] mr-[6px]"></i> All Departments</li>
            <li class="side-links" onclick="_expand_link('transaction');"  title="">  <i class="bi-arrow-left-right text-[#3a4669] mr-[6px]"></i> Transaction  <i class="bi bi-chevron-down float-right mr-[15px]"></i>
                <div class="w-[100%] bg-[#f4f6fa]" id="transaction-li" style="display:none">
                    <div class="li-in" id="" onClick=""> - All Loan Requests</div>
                    <div class="li-in" onClick="_get_form('');"> - Deposit Money</div>
                    <div class="li-in" onClick="_get_form('');"> - Transfer Money</div>
                    <div class="li-in" onClick=""> - Transaction History</div>
                </div>
            </li>
            <li class="side-links" onclick="_expand_link('settings');"  title="Settings">  <i class="bi-gear text-[#3a4669] mr-[6px]"></i> Settings  <i class="bi bi-chevron-down float-right mr-[15px]"></i>
                <div class="w-[100%] bg-[#f4f6fa]" id="settings-li" style="display:none">   
                    <div class="li-in" id="system-settling" onClick="_get_form('system-setting')"> - System Settings</div>
                    <div class="li-in" onClick="_get_form('pass-form');"> - Change Password</div>
                </div>
            </li>
            <li class="side-links" onclick="_logout_();"><i class="bi-power text-[#3a4669] mr-[6px]"></i> Log-Out</li>
        </ul>
    </div>
</nav>





