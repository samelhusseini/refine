"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,A=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||A;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=n.length,o=new Array(A);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<A;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>A,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const A={title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,i={permalink:"/blog/manage-hackathons-with-refine",source:"@site/blog/2021-10-4-manage-hackatons.md",title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:3.245,hasTruncateMarker:!0,authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],frontMatter:{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi"},nextItem:{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine"},relatedPosts:[{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",formattedDate:"August 29, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:16.26,date:"2022-08-29T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"},{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:4.885,date:"2022-02-12T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},l=[{value:"Creating tables",id:"creating-tables",level:2},{value:"Craeting CRUD pages",id:"craeting-crud-pages",level:2},{value:"Create page:",id:"create-page",level:2},{value:"Creating voting page",id:"creating-voting-page",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We'll be building a demo app to manage hackathons with ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine"),". We'll be able to create new hackathons, new project entries for a hackathon and criterias for a hackathon."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"data:image/png;base64,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",alt:"hackathons"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"We'll use ",(0,r.kt)("a",{parentName:"p",href:"https://supabase.io/"},"supabase")," as the backend service. ",(0,r.kt)("strong",{parentName:"p"},"refine")," comes with a builtin data provider for supabase thus it's very easy to create crud pages."),(0,r.kt)("h2",{id:"creating-tables"},"Creating tables"),(0,r.kt)("p",null,"Our app will have these tables in supabase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"criterias"),(0,r.kt)("li",{parentName:"ul"},"hackathons"),(0,r.kt)("li",{parentName:"ul"},"hackathoners"),(0,r.kt)("li",{parentName:"ul"},"projects"),(0,r.kt)("li",{parentName:"ul"},"projectscores  ")),(0,r.kt)("p",null,"These are reflected in our app as "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type HackathonerType = {\n  id: string;\n  name: string;\n};\n\nexport type HackathonType = {\n  id: string;\n  start: string;\n  end: string;\n  name: string;\n};\n\nexport type ProjectType = {\n  id: string;\n  name: string;\n  description: string;\n  url: string;\n  hackathon_id: string;\n  hackathoner_id: string;\n};\n\nexport type CriteriaType = {\n  id: string;\n  name: string;\n  hackathon_id: string;\n};\n\nexport type ProjectScoreType = {\n  project_id: string;\n  criteria_id: string;\n  score: string;\n};\n\n")),(0,r.kt)("h2",{id:"craeting-crud-pages"},"Craeting CRUD pages"),(0,r.kt)("p",null,"Creating crud pages is as easy like this:"),(0,r.kt)("p",null,"List page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  List,\n  Table,\n  useTable,\n  Space,\n  ShowButton,\n  EditButton,\n  TextField,\n} from "@pankod/refine";\n\nimport dayjs from "dayjs";\n\nimport { HackathonType } from "interfaces";\n\nexport const HackathonsList: React.FC = () => {\n  const { tableProps } = useTable<HackathonType>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="name" title="Name" />\n        <Table.Column\n          dataIndex="start"\n          title="Starts"\n          render={(value) => (\n            <TextField value={dayjs(value).format("DD/MMMM dddd")} />\n          )}\n        />\n        <Table.Column\n          dataIndex="end"\n          title="Ends"\n          render={(value) => (\n            <TextField value={dayjs(value).format("DD/MMMM dddd")} />\n          )}\n        />\n        <Table.Column\n          title="Actions"\n          dataIndex="actions"\n          render={(_text, record: HackathonType): React.ReactNode => {\n            return (\n              <Space>\n                <ShowButton size="small" recordItemId={record.id} hideText />\n                <EditButton size="small" recordItemId={record.id} hideText />\n              </Space>\n            );\n          }}\n        />\n      </Table>\n    </List>\n  );\n};\n\n')),(0,r.kt)("h2",{id:"create-page"},"Create page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create, Form, Input, useForm, DatePicker } from "@pankod/refine";\n\nimport { HackathonType } from "interfaces";\n\nexport const HackathonsCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<HackathonType>();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item label="Name" name="name">\n          <Input />\n        </Form.Item>\n        <Form.Item label="Name" name="start">\n          <DatePicker />\n        </Form.Item>\n        <Form.Item label="Name" name="end">\n          <DatePicker />\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n')),(0,r.kt)("p",null,"Then use these pages as the corresponding crud component for the ",(0,r.kt)("inlineCode",{parentName:"p"},"hackathon")," resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\n\nimport "@pankod/refine/dist/styles.min.css";\nimport { dataProvider } from "@pankod/refine-supabase";\nimport { supabaseClient } from "utility";\nimport {\n  HackathonsList,\n  HackathonsCreate,\n  HackathonsEdit,\n  HackathonsShow,\n} from "./pages/hackathons";\n\nfunction App() {\n  return (\n    <Refine\n      dataProvider={dataProvider(supabaseClient)}\n      resources={[{\n        name: "hackathons",\n        list: HackathonsList,\n        create: HackathonsCreate,\n        edit: HackathonsEdit,\n        show: HackathonsShow\n      }]}\n    />\n  );\n}\n\nexport default App;\n\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"data:image/png;base64,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",alt:"create"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," comes with builtin hooks for Ant design components. You can find detailed usage for the hooks and supabase in the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"documentation")),(0,r.kt)("h2",{id:"creating-voting-page"},"Creating voting page"),(0,r.kt)("p",null,"We'll use the dashboard option to place voting page. We'll need data from different resources. ",(0,r.kt)("strong",{parentName:"p"},"refine")," comes with powerful hooks that are based on react-query to get data from those resources."),(0,r.kt)("p",null,"For example to get the hackathons that are active now we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const DashboardPage: React.FC = () => {\n  const currentHackathons = useList<HackathonType>({\n    resource: "hackathons",\n    config: {\n      filters: [\n        {\n          field: "start",\n          operator: "lte",\n          value: now,\n        },\n        {\n          field: "end",\n          operator: "gte",\n          value: now,\n        },\n      ],\n    },\n  });\n}\n')),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/hackathonize-xcpcp?autoresize=1fontsize=14&=1&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"hackathonize",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("p",null,"We can get data from other resources in a similar fashion. You can find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/blog/hackathonize"},"repo here")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This project itself is a product of a hackathon. It lacks lots of feature like authorization though it shows how ",(0,r.kt)("strong",{parentName:"p"},"refine")," makes it easy to quickly build a working app."))}p.isMDXComponent=!0}}]);