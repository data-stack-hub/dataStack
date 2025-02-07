import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  @Input() block:any={}
  @Input() element:any = {}
  @Input() root:any={}
  height =30;
  url = 'http://localhost:5000/'
  editor: any;
  constructor(private api:ApiService, private app :AppComponent){}
  code_output:any
  code_output_type:any
  show = false
  ngOnInit(){
    console.log(this.block, this.root, this.element)
    this.show = true
  }
  // run_block(e:any){
  //   console.log(e)
  //   this.api.post(this.url + '/run_block', {...e}).subscribe(res=>{
  //     console.log(res)
  //     this.code_output = res['res']
  //     this.code_output_type = res['type']
  //   })
  // }

  onEditorInit(e: any): void {
    this.editor = e
    this.height = e.getContentHeight() +20
    e.onDidContentSizeChange(()=>{
      console.log(e.getContentHeight())
      this.height = e.getContentHeight() +20
      // this.block_change()
    });

    // e.onDidChangeContent((event)=>{
    //   console.log(event)

    // })
    // this.editor.setModel(monaco.editor.createModel("console.log('Hello ng-zorro-antd')", 'typescript'));
    console.log( e.getModel().getLineCount())
  }

  // block_change(){
  //   console.log('block chaneged', this.block)
  //   let payload = {
  //     'block':this.block,
  //     'parent':this.element
  //   }
  //   this.api.post(this.url +'editable', {...this.root,...{'payload':payload}}).subscribe(res=>{console.log(res)})
  // }

  onCodeChange(block, ev){
    // this.app.req(this.url, )
    this.app.req(block, {value: ev, action:'change'})
  }
}
