(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=n(9),o=n(2),l=n(3),u=n(5),m=n(4),d=(n(15),n(0)),b=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h2",{className:"section__title",children:e}),n]})},h=n(8),j=n(23),f=(n(17),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(j.a)(),t.numberInputId=Object(j.a)(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:"form__element",htmlFor:this.nameInputId,children:[Object(d.jsx)("span",{className:"input__title",children:"Name"}),Object(d.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(d.jsxs)("label",{className:"form__element",htmlFor:this.numberInputId,children:[Object(d.jsx)("span",{className:"input__title",children:"Number"}),Object(d.jsx)("input",{className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(d.jsx)("button",{className:"button",type:"submit",children:" Add contact"})]})}}]),n}(a.Component)),p=(n(18),function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteHandler;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:"contact-item__data",children:[e," : ",n]}),Object(d.jsx)("button",{onClick:function(){return c(a)},type:"button",className:"button",children:"Delete"})]})}),O=(n(19),function(t){var e=t.contacts,n=t.deleteHandler;return Object(d.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(d.jsx)("li",{className:"contact-list__item",children:Object(d.jsx)(p,{name:t.name,number:t.number,id:t.id,deleteHandler:n})},t.id)}))})}),v=(n(20),function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:"input__title",children:[" Filter contacts by name",Object(d.jsx)("input",{className:"input",type:"text",value:e,name:"filter",onChange:n})]})});v.defaultProps={value:""};var x=v,g=(n(21),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c={id:Object(j.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{title:"Phonebook",children:Object(d.jsx)(f,{onSubmit:this.formSubmitHandler})}),Object(d.jsxs)(b,{title:"Contacts",children:[Object(d.jsx)(x,{value:this.state.filter,onChange:this.changeFilter}),Object(d.jsx)(O,{contacts:this.getVisibleContacts(),deleteHandler:this.deleteContact})]})]})}}]),n}(a.Component));r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e17d5e8c.chunk.js.map