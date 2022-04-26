
			var opt_1 = new Array ("-", "Doom", "Forza", "DOTA2", "...");
			var opt_2 = new Array ("-", "Disco Duro", "SSD", "CPU", "...");
			var opt_3 = new Array ("-", "Google Chrome", "Linux", "opera", "...");
			var opt_4 = new Array ("-", "MSI", "ASUS", "GIGABYTE", "...");
			// 2) crear una funcion que permita ejecutar el cambio dinamico
			
			function cambia(){
				var cosa;
				cosa = document.consulta.cosa[document.consulta.cosa.selectedIndex].value;	
				if(cosa!=0){				
					mis_opts=eval("opt_" + cosa);
					num_opts=mis_opts.length;	
					document.consulta.opt.length = num_opts;
					
					for(i=0; i<num_opts; i++){
						document.consulta.opt.options[i].value=mis_opts[i];
						document.consulta.opt.options[i].text=mis_opts[i];
					}
					}else{
					
						document.consulta.opt.length = 1;
						document.consulta.opt.options[0].value="-";
						document.consulta.opt.options[0].text="-";
					}
				
					document.consulta.opt.options[0].selected = true;
					
				}