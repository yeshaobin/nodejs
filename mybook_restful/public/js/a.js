$(function(){
	function initList(){
		$.ajax({
			type:'get',
			url:'/books',
			dataType:"json",
			success:function(data){
				var html = template('indexTpl',{list:data})
				$('#dataList').html(html);
				$('#dataList').find('tr').each(function(index,element){
					let td = $(element).find('td:eq(5)');
					let id = $(element).find('td:eq(0)').text();
					td.find('a:eq(0)').click(function(){
						editBook(id);
					});
					td.find('a:eq(1)').click(function(){
						deleteBook(id);
					});
				});
				addBook();
				var form = $('#addBookForm');
				form.get(0).reset();
				form.find('input[type=hidden]').val('');
			}
		});
	}
	function editBook(id){
		var form = $('#addBookForm');
		$.ajax({
			type:'get',
			url:'/books/book/'+id ,
			dataType:'json',
			success:function(data){
				var mark = new MarkBox(600,400,'编辑图书',form.get(0));
				mark.init();
				form.find('input[name=id]').val(data.id);
				form.find('input[name=name]').val(data.name);
				form.find('input[name=author]').val(data.author);
				form.find('input[name=category]').val(data.category);
				form.find('input[name=description]').val(data.description);
				form.find('input[type=button]').unbind('click').click(function(){
					$.ajax({
						type:'put',
						url:'/books/book',
						data:form.serialize(),
						dataType:'json',
						success:function(data){
							if(data.flag){
								mark.close();
								initList();
							}
						}
					})
				})
			}
		})
	}
	initList();//初始化数据列表
	function deleteBook(id){
		$.ajax({
			type:'delete',
			url:'/books/book/'+id,
			dataType:'json',
			success:function(data){
				console.log(data,typeof(data.flag))
				if(data.flag){
					initList();
				}
			}
		})
	}
	function addBook(){
		$('#addBookId').click(function(){
			var form = $('#addBookForm');
			// console.log(form);
			var mark = new MarkBox(600,400,'添加图书',form.get(0));
			mark.init();
			form.find('input[type=button]').unbind('click').click(function(){
				console.log(form.serialize(),typeof(form.serialize()));
				$.ajax({
					type:'post',
					url:'/books/book',
					data:form.serialize(),
					dataType:'json',
					success:function(data){
						console.log(data);
						if(data.flag){
							mark.close();
							initList();
						}
					}
				})
			});
		})
		
	}
	$('#addBookId').click(function(){
		var form = $('#addBookForm');
		// console.log(form);
		var mark = new MarkBox(600,400,'添加图书',form.get(0));
		mark.init();
		form.find('input[type=button]').unbind('click').click(function(){
			console.log(form.serialize(),typeof(form.serialize()));
			$.ajax({
				type:'post',
				url:'/books/book',
				data:form.serialize(),
				dataType:'json',
				success:function(data){
					console.log(data);
					if(data.flag){
						mark.close();
						initList();
					}
				}
			})
		});
	})


})