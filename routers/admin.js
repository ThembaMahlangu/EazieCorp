const express = require('express');
const path = require('path');
const router = express.Router();
const chatbox = require('./../models/chatbox')
const add_property = require('./../models/add_property')
router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('admin-dashboard.ejs');
  })

router.get('/activities', function (req, res) {
    res.render('activities.ejs');
  });
router.get('/departments', function (req, res) {
    res.render('departments.ejs');
  });


// -------------------------- Enployees Sction -----------------------------------//


router.get('/employees', function (req, res) {
    res.render('employees.ejs');
  });

router.post('/employees', function (req, res) {
 pass

  });


// -------------------------- Enployees Sction End --------------------------------//


router.get('/employees-list', function (req, res) {
    res.render('employees-list.ejs');
  });


router.get('/employee-dashboard', function (req, res) {
    res.render('employee-dashboard.ejs');
  });

router.get('/email-settings', function (req, res) {
    res.render('email-settings.ejs');
  });

router.get('/edit-invoice', function (req, res) {
    res.render('edit-invoice.ejs');
  });

router.get('/visited-jobs', function (req, res) {
    res.render('visited-jobs.ejs');
  });

router.get('/users', function (req, res) {
    res.render('users.ejs');
  });


router.get('/user-dashboard', function (req, res) {
    res.render('user-dashboard.ejs');
  });

router.get('/user-all-jobs', function (req, res) {
    res.render('user-all-jobs.ejs');
  });

router.get('/training', function (req, res) {
    res.render('training.ejs');
  });

router.get('/training-type', function (req, res) {
    res.render('training-type.ejs');
  });

router.get('/trainers', function (req, res) {
    res.render('trainers.ejs');
  });

router.get('/toxbox-setting', function (req, res) {
    res.render('toxbox-setting.ejs');
  });

router.get('/timesheet', function (req, res) {
    res.render('timesheet.ejs');
  });

router.get('/tickets', function (req, res) {
    res.render('tickets.ejs');
  });

router.get('/ticket-view', function (req, res) {
    res.render('ticket-view.ejs');
  });

router.get('/theme-settings', function (req, res) {
    res.render('theme-settings.ejs');
  });

router.get('/terms', function (req, res) {
    res.render('terms.ejs');
  });

router.get('/termination', function (req, res) {
    res.render('termination.ejs');
  });

router.get('/taxes', function (req, res) {
    res.render('taxes.ejs');
  });

router.get('/tasks', function (req, res) {
    res.render('tasks.ejs');
  });

router.get('/task-board', function (req, res) {
    res.render('task-board.ejs');
  });

router.get('/subscriptions', function (req, res) {
    res.render('subscriptions.ejs');
  });

router.get('/subscriptions-company', function (req, res) {
    res.render('subscriptions-comany.ejs');
  });

router.get('/subscribed-companies', function (req, res) {
    res.render('subscribed-companies.ejs');
  });

router.get('/settings', function (req, res) {
    res.render('settings.ejs');
  });

router.get('/salary', function (req, res) {
    res.render('salary.ejs');
  });

router.get('/salary-view', function (req, res) {
    res.render('salary-view.ejs');
  });

router.get('/salary-settings', function (req, res) {
    res.render('salary-settings.ejs');
  });

router.get('/roles-permissions', function (req, res) {
    res.render('roles-permissions.ejs');
  });

router.get('/resignation', function (req, res) {
    res.render('resignation.ejs');
  });

router.get('/register', function (req, res) {
    res.render('register.ejs');
  });

router.get('/provident-fund', function (req, res) {
    res.render('provident-fund.ejs');
  });

router.get('/projects', function (req, res) {
    res.render('projects.ejs');
  });

router.get('/project-view', function (req, res) {
    res.render('project-view.ejs');
  });

router.get('/project-list', function (req, res) {
    res.render('project-list.ejs');
  });

router.get('/profile', function (req, res) {
    res.render('profile.ejs');
  });

router.get('/privacy-policy', function (req, res) {
    res.render('privacy-policy.ejs');
  });

router.get('/policies', function (req, res) {
    res.render('policies.ejs');
  });

router.get('/paroll-items', function (req, res) {
    res.render('payroll-items.ejs');
  });

router.get('/payments', function (req, res) {
    res.render('payments.ejs');
  });

router.get('/notifications-settings', function (req, res) {
    res.render('notifications-settings.ejs');
  });

router.get('/manage-resumes', function (req, res) {
    res.render('manage-resumes.ejs');
  });

router.get('/login', function (req, res) {
    res.render('login.ejs');
  });


// ----------------------- Leaves --------------------------//


router.get('/leaves', function (req, res) {
    res.render('leaves.ejs');
  });

router.post('/leaves', async function (req, res) {
    let new_building = new add_property({

      Building_Type : req.body.building_type,
      Room_Type: req.body.room_type,
      Rent : req.body.Rent,
      Rates: req.body.Rates,
      Total_Rent : req.body.Total,
      Building_address:req.body.building_address,
      image_upload : req.body.file_upload

    });

    try{

      new_building = await new_building.save();
      res.render('leaves.ejs');

    } catch(e){
      res.render('404.ejs')
    }

  });



// --------------------- end Leaves  ---------------------//


router.get('/leave-type', function (req, res) {
    res.render('leave-type.ejs');
  });

router.get('/invoices', function (req, res) {
    res.render('invoices.ejs');
  });

router.get('/invoice-view', function (req, res) {
    res.render('invoice-view.ejs');
  });

router.get('/invoice-settings', function (req, res) {
    res.render('invoice-settings.ejs');
  });

router.get('/forgot-password', function (req, res) {
    res.render('forgot-password.ejs');
  });


//----------------- Expenses ----------------------\\



router.get('/expenses', function (req, res) {
  res.render('expenses.ejs');
});
router.post('/expenses', async function (req, res) {
    let new_expense = await expense.create({

      item_name : req.body.item_name,
      purchase_from: req.body.purchase_from,
      purchase_date : req.body.purchase_date,
      purchased_by : req.body.purchased_by,
      amount  : req.body.amount,
      paid_by : req.body.paid_by,
      status: req.body.status,
      file_upload: req.body.attachments,
    
      });
      
      try{
        res.render('expenses.ejs')
       console.log(new_expense);
    
     }catch(e){
      console.log(e)
     };
  });



//----------------- Expenses End --------------------\\

router.get('/events', function (req, res) {
    res.render('events.ejs');
  });

router.get('/estimates', function (req, res) {
    res.render('estimates.ejs');
  });

router.get('/estimate-view', function (req, res) {
    res.render('estimate-view.ejs');
  });

router.get('/error-500', function (req, res) {
    res.render('error-500.ejs');
  });

router.get('/error-404', function (req, res) {
    res.render('error-404.ejs');
  });


router.get('/create-invoice', function (req, res) {
    res.render('create-invoice.ejs');
  });

router.get('/create-estimate', function (req, res) {
    res.render('create-estimate.ejs');
  });

router.get('/contacts', function (req, res) {
    res.render('contacts.ejs');
  });

router.get('/compose', function (req, res) {
    res.render('compose.ejs');
  });

router.get('/clients', function (req, res) {
    res.render('clients.ejs');
  });

router.get('/clients-list', function (req, res) {
    res.render('clients-list.ejs');
  });

router.get('/client-profile', function (req, res) {
    res.render('client-profile.ejs');
  });


//-------- Chat Box ------//


router.get('/chat', function (req, res) {
    res.render('chat.ejs');
  });

router.post('/chat', function (req, res) {
    console.log(req.body.input)
  });


// ----------- Chat Box end ----------//


router.get('/change-password', function (req, res) {
    res.render('change-password.ejs');
  });


router.get('/budgets', function (req, res) {
    res.render('budgets.ejs');
  });

router.get('/budget-revenues', function (req, res) {
    res.render('budget-revenues.ejs');
  });


router.get('/admin-dashboard', function (req, res) {
    res.render('admin-dashboard.ejs');
  });

router.get('/activities', function (req, res) {
    res.render('activities.ejs');
  });



module.exports = router;