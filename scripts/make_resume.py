import zipfile
import io
import os

os.makedirs('public', exist_ok=True)

docx_buffer = io.BytesIO()
with zipfile.ZipFile(docx_buffer, 'w', zipfile.ZIP_DEFLATED) as z:
    z.writestr('[Content_Types].xml', """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>""")
    
    z.writestr('_rels/.rels', """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>""")
    
    z.writestr('word/_rels/document.xml.rels', """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
</Relationships>""")
    
    doc_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="48"/></w:rPr><w:t>Aryan Patel</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:i/><w:sz w:val="24"/></w:rPr><w:t>Web Developer and QA Engineer | aryanp204@gmail.com</w:t></w:r></w:p>
    <w:p><w:r><w:t>--------------------------------------------------</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="28"/></w:rPr><w:t>PROFESSIONAL SUMMARY</w:t></w:r></w:p>
    <w:p><w:r><w:t>IT Professional skilled in Java, JavaScript, Python, C#, C++, HTML, CSS, Bootstrap, jQuery, Node.js, MySQL, and MongoDB. Hands-on experience in quality assurance, automation testing, and process optimization.</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/><w:sz w:val="28"/></w:rPr><w:t>EXPERIENCE</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/></w:rPr><w:t>IT Quality Analyst (Tech) - Etech, Gandhinagar, Gujarat (June 2022 - July 2023)</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Executed 500+ test cases monthly, reducing post-release defects by 30%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Implemented automated testing scripts, decreasing manual testing time by 40%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Optimized test environment setup process, reducing preparation time by 50%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Conducted daily code reviews for 5 team members, resulting in a 25% defect reduction.</w:t></w:r></w:p>
    <w:p><w:r><w:rPr><w:b/></w:rPr><w:t>IT Tech Support - Etech, Gandhinagar, Gujarat (May 2021 - June 2022)</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Developed and deployed knowledge base, increasing customer self-service by 25%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Optimized ticketing system, improving resolution time by 40%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Conducted root cause analysis on recurring technical issues, reducing recurrence by 50%.</w:t></w:r></w:p>
    <w:p><w:r><w:t>- Spearheaded remote desktop support capabilities, reducing resolution time by 35%.</w:t></w:r></w:p>
  </w:body>
</w:document>"""
    z.writestr('word/document.xml', doc_xml)

with open('public/AryanPatel_Resume.docx', 'wb') as f:
    f.write(docx_buffer.getvalue())

print('Created public/AryanPatel_Resume.docx successfully')
