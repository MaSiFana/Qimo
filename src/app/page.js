import Image from "next/image";
import Link from "next/link";
import { courses } from "./lib/courses";
export default function NewPage() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f5f5dc' }}>
      <script
         src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
         id="qanything-iframe"
         data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/76308406DB0541C1/share"
         data-default-open="false"
         data-drag="false"
         data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
         data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
         defer
       >
       </script>
      <h1 style={{ fontSize: '36px', textAlign: 'center' }}>《web前端技术》课程作业展示</h1>
      <h2 style={{ letterSpacing: '2px', textAlign: 'center' }}>欢迎来到课程作业展示平台，这里汇集了各个阶段的学习成果与练习项目</h2>
      
      {/* 添加课程列表 */}
      <ul style={{ listStyleType: 'none', padding: '20px', fontSize: '18px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {courses.map((course) => (
          <li key={course.id} style={{ margin: '15px', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <Image src={course.image} alt={course.title} width={1000} height={1000} style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '15px', marginLeft: 'auto', marginRight: 'auto' }} />
            <span style={{ fontSize: '20px', fontWeight: '600' }}>{course.title}</span>
            <span style={{ fontSize: '16px', color: '#555', marginTop: '8px' }}>{course.description}</span>
            {course.title === "HTML基础练习项目" ? (
              <a href="/HTML/main.html" target="_blank">
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </a>
            ) : course.title === "CSS布局实践" ? (
              <a href="/csssecond/2222.html" target="_blank">
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </a>
            ) : course.title === "JavaScript基础" ? (
              <a href="/HTML/main.html" target="_blank">
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </a>
            ) : course.title === "React基础" ? (
              <a href="/csssecond/2222.html" target="_blank">
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </a>
            ) : course.title === "Github集合" ? (
              <a href="https://github.com/MaSiFana/-MaSiFana" target="_blank">
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </a>
            ) : (
              <Link href={`/courses/${course.slug}`}>
                <button style={{ backgroundColor: '#0070f3', color: 'white', padding: '6px 12px', borderRadius: '4px', marginTop: '10px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>查看详情</button>
              </Link>
            )}
          </li>
        ))}
      </ul>
      
    </div>
  );
}