var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
/****************************************************************************/
/************************** Get Admin Details ***********************************/
/****************************************************************************/	
	$scope.cook_cook_email = $cookieStore.get("cook_cook_email");

	
/****************************************************************************/
/************************** User Logout ************************************/
/****************************************************************************/		
	$scope.admin_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_admin_email = "";
			$cookies.cook_user_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
	
	
	$scope.user_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.cook_admin_email = "";
			$cookies.cook_user_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
/****************************************************************************/
/************************** Add Complaint *********************************/
/****************************************************************************/
	$scope.complaint_status = function(cus_id) 
	{		
		window.location = "admin_post_complaint.html";
		$cookieStore.put("cook_cus_id",cus_id);
		return;				
    }
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");

	$scope.complaint_solution = function() 
	{		
		$http.post('complaint_status.php', {
		'field_9':$scope.field_9,'field_10':$scope.field_10,
		'field_11':$scope.field_11,	'cus_id':$scope.cook_cus_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_view_complaint.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
/****************************************************************************/
/************************** All Complaint *********************************/
/****************************************************************************/

	$http.post('complaint_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.details = data.details;
		}
		else
		{
			$scope.details = "No Data Found !!!";
		}
    });
	
	
/****************************************************************************/
/************************** Add Requriments *********************************/
/****************************************************************************/
	
	$scope.create_requirment = function() 
	{		
		$http.post('create_order.php', {
		'field_1':$scope.field_1,'field_2':$scope.field_2,'field_3':$scope.field_3,
		'field_4':$scope.field_4,'email':$scope.cook_user_email
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Requirment Submitted Successfully");
				window.location = "home.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
	
/****************************************************************************/
/************************** Admin Update Order Requirment *******************/
/****************************************************************************/
	$scope.order_status = function(myorder_id,field_5,field_7,field_8,field_9) 
	{		
		window.location = "admin_post_requirments.html";
		$cookieStore.put("cook_myorder_id",myorder_id);
		$cookieStore.put("cook_req_5",field_5);
		$cookieStore.put("cook_req_7",field_7);
		$cookieStore.put("cook_req_8",field_8);
		$cookieStore.put("cook_req_9",field_9);
		return;				
    }
	
	$scope.cook_myorder_id = $cookieStore.get("cook_myorder_id");
	$scope.cook_req_5 = $cookieStore.get("cook_req_5");
	$scope.cook_req_7 = $cookieStore.get("cook_req_7");
	$scope.cook_req_8 = $cookieStore.get("cook_req_8");
	$scope.cook_req_9 = $cookieStore.get("cook_req_9");

	$scope.order_solution = function() 
	{		
		$http.post('order_solution.php', {
		'field_5':$scope.cook_req_5,'field_7':$scope.cook_req_7,'field_8':$scope.cook_req_8,
		'field_9':$scope.cook_req_9,'myorder_id':$scope.cook_myorder_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_view_requirments.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
/****************************************************************************/
/************************** View All Requirment *****************************/
/****************************************************************************/
	$http.post('requirment_get_all.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.alldetails = data.alldetails;
		}
		else
		{
			$scope.alldetails = "No Data Found !!!";
		}
    });


/****************************************************************************/
/************************** Admin Update Complaints Solutions ***************/
/****************************************************************************/
	$scope.post_complaint_solution = function(cus_id,field_9,field_10,field_11) 
	{		
		window.location = "admin_post_complaint.html";
		$cookieStore.put("cook_cus_id",cus_id);
		$cookieStore.put("cook_field_9",field_9);
		$cookieStore.put("cook_field_10",field_10);
		$cookieStore.put("cook_field_11",field_11);
		return;				
    }
	$scope.cook_cus_id = $cookieStore.get("cook_cus_id");
	$scope.cook_field_9 = $cookieStore.get("cook_field_9");
	$scope.cook_field_10 = $cookieStore.get("cook_field_10");
	$scope.cook_field_11 = $cookieStore.get("cook_field_11");

	$scope.admin_complaint_solution = function() 
	{		
		$http.post('admin_complaint_solution.php', {
		'cook_field_9':$scope.cook_field_9,'cook_field_10':$scope.cook_field_10,
		'cook_field_11':$scope.cook_field_11,'cook_cus_id':$scope.cook_cus_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Submitted Successfully");
				window.location = "admin_view_complaint.html";
				return;				
			}
			else if(data.success == 2)
			{
				alert("Please Fill All Fields");
			}
			else
				{
					alert("Un Successfully");
				}
        });
    }
	

/****************************************************************************/
/************************** View All Requirment *****************************/
/****************************************************************************/
	$http.post('customer_get.php')
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.cus_details = data.details;
		}
		else
		{
			$scope.cus_details = "No Data Found !!!";
		}
    });



/****************************************************************************/
/************************** Delete Sales   *********************************/
/****************************************************************************/
	// products_delete
	$scope.sales_delete = function(customer_id) 
	{		
        $http.post('sales_delete.php', 
		{
		'customer_id': customer_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Customer Sales Deleted Successful");
				window.location = "sales.html";	
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	
			

	
/****************************************************************************/
/************************** Add Sales *********************************/
/****************************************************************************/

	$scope.invoice_add = function() 
	{		
		$scope.fname = document.getElementById('enquriy_date').value;
		$scope.mobile = document.getElementById('due_date').value;
	
		$http.post('invoice_create.php', {
		'fname': $scope.fname, 'lname':$scope.lname, 'email':$scope.email,
		'password': $scope.password,'plotno': $scope.plotno,
		'cname': $scope.cname,'address': $scope.address,'mobile': $scope.mobile,
		'chequeno': $scope.chequeno})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Invoice Created Successfully");
				window.location = "invoice.html";
				return;				
			}
				else
				{
				alert("Invoice Created Successfully");
				window.location = "invoice.html";
				return;				
				}
        });
    }
	
	
/****************************************************************************/
/************************** Update Marketing ********************************/
/****************************************************************************/
	$scope.myVar = true;
	$scope.edit_marketing = function(product_id,emp_id,pname,pimage,description,price,offer,size,stock,specification,tax_amount,shipping_days) 
	{
		$scope.myVar = false;
		$scope.product_id = product_id;
		$scope.emp_id = emp_id;
		$scope.pname = pname;
		$scope.pimage = pimage;
		$scope.description = description;
		$scope.price = price;
		$scope.offer = offer;
		$scope.size = size;
		$scope.stock = stock;
		$scope.specification = specification;
		$scope.tax_amount = tax_amount;
		//window.location = "home.html";
	}	

/****************************************************************************/
/************************** Save Marketing ********************************/
/****************************************************************************/
	$scope.save_marketing = function() 
	{
	$http.post('products_update.php', {
			'product_id': $scope.product_id,'emp_id': $scope.emp_id,'pname': $scope.pname, 
			'pimage': $scope.pimage,  'description': $scope.description,
			'price': $scope.price, 'size': $scope.size,
			'stock': $scope.stock, 'specification': $scope.specification, 
			'tax_amount': $scope.tax_amount})
	.success(function(data, status, headers, config) 
	{
				if(data.success == 1)
				{
					alert("Updated Successfully");
				window.location = "marketing.html";
				return;
				}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}


/****************************************************************************/
/************************** View All Products *******************************/
/****************************************************************************/
	// All Products
	$scope.status = $cookieStore.get("status");	
	
	$http.post('products_get.php',{'status':$scope.status})
		.success(function (data, status, headers, config) 
		{
			if(data.success == 1)
			{
				$scope.products = data.products;
			}
			else
			{
				$scope.er_list = "No Products Found";
			}
		});
	
/****************************************************************************/
/************************** Add Products *********************************/
/****************************************************************************/
	$scope.product_add = function() 
	{
	$http.post('products_add.php', {
	'empid': $scope.empid, 'pname': $scope.pname,  'pimage': $scope.pimage,  
	'description': $scope.description,'price': $scope.price, 
	 'size': $scope.size,'stock': $scope.stock, 'specification': $scope.specification,
	 'tax_amount': $scope.tax_amount})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Added successfully");
			window.location = "marketing.html"; //create_associate
			return;
		}
		else 
		{
			alert("Added successfully");
			window.location = "marketing.html"; //create_associate
			return;
		}
			
    });
	}
	
/****************************************************************************/
/************************** Delete Products *********************************/
/****************************************************************************/
	// products_delete
	$scope.product_delete = function(product_id) 
	{		
        $http.post('products_delete.php', 
		{
		'product_id': product_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "marketing.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	
/*****************************************************************************/
/************************** Update Products *********************************/
/****************************************************************************/
	$scope.product_edit_cookie = function(product_id,emp_id,pname,pimage,description,price,offer,size,
							stock,specification,tax_amount,shipping_days) 
	{
		$cookieStore.put("product_id",product_id);
		$cookieStore.put("emp_id",emp_id);
		$cookieStore.put("pname",pname);
		$cookieStore.put("pimage",pimage);
		$cookieStore.put("description",description);
		$cookieStore.put("price",price);
		$cookieStore.put("offer",offer);
		$cookieStore.put("size",size);
		$cookieStore.put("stock",stock);
		$cookieStore.put("specification",specification);
    	$cookieStore.put("tax_amount",tax_amount);
		$cookieStore.put("shipping_days",shipping_days);
		window.location = "edit_marketing.html";
		return;
	}
	
	$scope.product_id = $cookieStore.get("product_id");
	$scope.emp_id = $cookieStore.get("emp_id");
	$scope.pname = $cookieStore.get("pname");
	$scope.pimage = $cookieStore.get("pimage");
	$scope.description = $cookieStore.get("description");
	$scope.price = $cookieStore.get("price");
	$scope.offer = $cookieStore.get("offer");
	$scope.size = $cookieStore.get("size");
	$scope.stock = $cookieStore.get("stock");
	$scope.specification = $cookieStore.get("specification");
	$scope.tax_amount = $cookieStore.get("tax_amount");
	$scope.shipping_days = $cookieStore.get("shipping_days");
		
$scope.product_update_data = function() 
	{
	$http.post('products_update.php', {
			'product_id': $scope.product_id,'emp_id': $scope.emp_id,'pname': $scope.pname, 
			'pimage': $scope.pimage,  'description': $scope.description,
			'price': $scope.price, 'size': $scope.size,
			'stock': $scope.stock, 'specification': $scope.specification, 
			'tax_amount': $scope.tax_amount})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "marketing.html"; //create_associate			
			///***** Delete Cookies **************			
			$cookies.emp_id = "";
			$cookies.pname = "";
			$cookies.pimage = "";
			$cookies.description = "";
			$cookies.price = "";
			$cookies.offer = "";
			$cookies.size = "";
			$cookies.stock = "";
			$cookies.specification = "";
			$cookies.tax_amount = "";
			$cookies.shipping_days = "";
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}

	
/****************************************************************************/
/************************** Validation **********************************/
/****************************************************************************/
	$scope.er_email = true;
	// mobile number verification
	$scope.register_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.pimage))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	// mobile number verification
	$scope.login_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.log_email))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	
	$scope.er_mob = true;
	// mobile number verification
	$scope.mobile_no = function()
	{
		var filter = /^\d{10}$/;
		if(filter.test($scope.description))
		{
			$scope.er_mob = true;
			$scope.btn_sgnup = false;
		}
		else
		{
			$scope.er_mob = false;
			$scope.btn_sgnup = true;
		}
	}

/****************************************************************************/
/************************** Add Sales *********************************/
/****************************************************************************/

	$scope.sales_create = function() 
	{		
		$http.post('sales_create.php', 
		{'fname': $scope.fname, 'lname':$scope.lname, 'email':$scope.email,
		'password': $scope.password,'plotno': $scope.plotno,
		'cname': $scope.cname,'bank': $scope.bank
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "sales.html";
				return;				
			}
			else 
			{
				alert("Created Successfully");
				window.location = "sales.html";
				return;				
			}
        });
    }

/*****************************************************************************/
/************************** Update Cookies Sales    **************************/
/****************************************************************************/
	$scope.sales_edit_cookie = function(customer_id,fname, lname, email, password, plotno, sqfeet, cname, cusid, address, mobile, chequeno, bank, tot_amt, adv_amt) 
	{
		$cookieStore.put("customer_id",customer_id);
		$cookieStore.put("fname",fname);
		$cookieStore.put("lname",lname);
		$cookieStore.put("email",email);
		$cookieStore.put("password",password);
		$cookieStore.put("plotno",plotno);
		$cookieStore.put("sqfeet",sqfeet);
		$cookieStore.put("cname",cname);
		$cookieStore.put("cusid",cusid);
		$cookieStore.put("address",address);
		$cookieStore.put("mobile",mobile);
    	$cookieStore.put("chequeno",chequeno);
		$cookieStore.put("bank",bank);
		$cookieStore.put("tot_amt",tot_amt);
		$cookieStore.put("adv_amt",adv_amt);
		window.location = "edit_sales.html";
		return;
	}
	
	$scope.customer_id = $cookieStore.get("customer_id");
	$scope.fname = $cookieStore.get("fname");
	$scope.lname = $cookieStore.get("lname");
	$scope.email = $cookieStore.get("email");
	$scope.password = $cookieStore.get("password");
	$scope.plotno = $cookieStore.get("plotno");
	$scope.sqfeet = $cookieStore.get("sqfeet");
	$scope.cname = $cookieStore.get("cname");
	$scope.cusid = $cookieStore.get("cusid");
	$scope.address = $cookieStore.get("address");
	$scope.mobile = $cookieStore.get("mobile");
	$scope.chequeno = $cookieStore.get("chequeno");
	$scope.bank = $cookieStore.get("bank");
	$scope.tot_amt = $cookieStore.get("tot_amt");
	$scope.adv_amt = $cookieStore.get("adv_amt");
	
/*****************************************************************************/
/************************** Update Sales    *********************************/
/****************************************************************************/
	$scope.sales_update = function() 
	{
	$http.post('sales_update.php', {
			'customer_id': $scope.customer_id,'fname': $scope.fname, 'lname':$scope.lname, 'email':$scope.email,
			'password': $scope.password,'plotno': $scope.plotno,'sqfeet': $scope.sqfeet,
			'cname': $scope.cname,'cusid': $scope.cusid,'address': $scope.address,
			'mobile': $scope.mobile,'chequeno': $scope.chequeno,
			'bank': $scope.bank,'tot_amt': $scope.tot_amt,'adv_amt': $scope.adv_amt
			})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");					
			window.location = "sales.html"; //create_associate	
			///***** Delete Cookies **************	
			$cookies.fname = "";
			$cookies.lname = "";
			$cookies.email = "";
			$cookies.password = "";
			$cookies.plotno = "";
			$cookies.sqfeet = "";
			$cookies.cname = "";
			$cookies.cusid = "";
			$cookies.address = "";
			$cookies.mobile = "";
			$cookies.chequeno = "";
			$cookies.bank = "";
			$cookies.tot_amt = "";
			$cookies.adv_amt = "";			
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");						
				}
								
    });
	}
/****************************************************************************/
/************************** SMS - SEND Payed Details ************************/
/****************************************************************************/
	$scope.welcome_sms = function(password) 
	{		
        $http.post('sms_send.php', 
		{
		'password': password
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("SMS Sent Successful");
				window.location = "sales.html";	
				return;
			}
			else if(data.success == 2)
			{
				alert("No id found");
			}
			else if(data.success == 0)
			{
				alert("SMS Not Sent");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	
/****************************************************************************/
/************************** View All enquiry Report *************************/
/****************************************************************************/
	// All Products
	
	$http.get('sms_balance.php')
	.success(function (response) 
	{
		if(response.success == 1)
		{
			$scope.balance = response.result;
		}		
	});
	
	
});