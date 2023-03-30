const {
  Document, Packer, Paragraph, HeadingLevel, UnderlineType
} = require('docx');
const fs = require('fs');
const path = require('path');

const { saveAs } = require('file-saver');

function saveDocumentToFile(doc, fileName) {
  const packer = new Packer();
  const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType);
    saveAs(docblob, fileName);
  });
}

function buildSosDoc(studyName, sosName, verses) {
    const docxChildren = [];
    docxChildren.push(
        new Paragraph({
            text: `${studyName} - ${sosName}`,
            heading: HeadingLevel.HEADING_1,
        })
    );

    verses.forEach((verse) => {
        const { keyword, overrideVerse } = verse;
        docxChildren.push(
            new Paragraph({
                text: keyword || '',
                heading: HeadingLevel.HEADING_2,
            })
        );
        docxChildren.push(
            new Paragraph({
                text: overrideVerse || '',
            })
        );
    });

    return docxChildren;
}

function writeSosDoc(docxChildren, fileName) {
  let doc = new Document({
    creator: 'Clippy',
    title: 'Sample Document',
    description: 'A brief example of using docx',
    styles: {
      default: {
        heading1: {
          run: {
            size: 46,
            bold: true,
            underline: {
                type: UnderlineType.DOUBLE,
                color: "FF0000",
            }
          }
        },
        heading2: {
          paragraph: {
            spacing: {
              before: 240,
              after: 240,
            },
          }
        }
      }
    },
    sections: [
      {
        children: docxChildren
      }
    ]
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync( 
      path.resolve(`./static/media/sos/${fileName}.docx`),
      buffer
    );
  });
}

module.exports = {
  buildSosDoc,
  writeSosDoc
};

