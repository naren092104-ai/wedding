import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { WEDDING_DATA } from '../data/weddingData';

export async function generateWeddingInvitationPdf(lang: 'en' | 'ta' = 'ta'): Promise<void> {
  // Create an off-screen container for crisp, dedicated A4 printable invitation rendering
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // standard A4 width at 96 DPI
  container.style.minHeight = '1123px'; // standard A4 height at 96 DPI
  container.style.backgroundColor = '#faf6ed';
  container.style.color = '#1e293b';
  container.style.fontFamily = lang === 'ta' ? "'Noto Sans Tamil', 'Plus Jakarta Sans', serif" : "'Cinzel', Georgia, serif";
  container.style.padding = '36px 40px';
  container.style.boxSizing = 'border-box';
  container.style.zIndex = '-9999';

  const isEn = lang === 'en';

  container.innerHTML = `
    <div style="border: 4px double #b45309; padding: 24px 28px; background: #fffdf8; position: relative; border-radius: 12px; box-shadow: 0 0 20px rgba(180, 83, 9, 0.15);">
      <!-- Corner Ornaments -->
      <div style="position: absolute; top: 8px; left: 12px; font-size: 20px; color: #b45309;">❦</div>
      <div style="position: absolute; top: 8px; right: 12px; font-size: 20px; color: #b45309;">❦</div>
      <div style="position: absolute; bottom: 8px; left: 12px; font-size: 20px; color: #b45309;">❦</div>
      <div style="position: absolute; bottom: 8px; right: 12px; font-size: 20px; color: #b45309;">❦</div>

      <!-- Top Praise & Verse -->
      <div style="text-align: center; border-bottom: 1.5px solid #d97706; padding-bottom: 10px; margin-bottom: 14px;">
        <p style="font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #92400e; margin: 0;">
          ${isEn ? 'Praise the Lord' : 'கர்த்தருக்கு ஸ்தோத்திரம்'}
        </p>
        <p style="font-size: 12px; font-style: italic; color: #78350f; margin: 3px 0 0 0;">
          ${isEn ? '“The things proceedeth from the LORD.” (Genesis 24:50)' : '“இந்தக் காரியம் கர்த்தரால் வந்தது” (ஆதியாகமம் 24:50)'}
        </p>
      </div>

      <!-- Title & Monogram -->
      <div style="text-align: center; margin-bottom: 14px;">
        <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; color: #b45309; background: #fef3c7; padding: 4px 14px; border-radius: 20px; border: 1px solid #fde68a;">
          ${isEn ? 'Holy Matrimony Invitation' : 'பரிசுத்த மெய்விவாக அழைப்பிதழ்'}
        </span>
        <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin: 10px 0 6px;">
          <div style="height: 1px; width: 60px; background: #d97706;"></div>
          <div style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid #b45309; display: flex; align-items: center; justify-content: center; background: #fffbeb; font-weight: bold; font-size: 16px; color: #92400e;">
            J &amp; V
          </div>
          <div style="height: 1px; width: 60px; background: #d97706;"></div>
        </div>
      </div>

      <!-- Couple Cartoon Illustration -->
      <div style="text-align: center; margin-bottom: 14px;">
        <img src="${WEDDING_DATA.images.hero}" style="width: 240px; height: 160px; object-fit: cover; border-radius: 12px; border: 3px solid #d97706; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: inline-block;" />
      </div>

      <!-- Parents Greeting -->
      <div style="text-align: center; font-size: 12px; color: #334155; line-height: 1.6; margin-bottom: 12px;">
        ${isEn ? `
          <p style="margin: 0;"><b>Mr. (Late) Charles &amp; Mrs. Latha</b></p>
          <p style="margin: 2px 0; font-style: italic; color: #64748b;">and</p>
          <p style="margin: 0;"><b>Mr. (Late) Raja &amp; Mrs. Devi</b></p>
          <p style="margin: 4px 0 0; color: #92400e; font-weight: 600;">
            Cordially invite your gracious presence with family and friends to the Holy Matrimony of our children
          </p>
        ` : `
          <p style="margin: 0;"><b>திரு. (லேட்) சார்லஸ் &amp; திருமதி. லதா</b></p>
          <p style="margin: 2px 0; font-style: italic; color: #64748b;">மற்றும்</p>
          <p style="margin: 0;"><b>திரு. (லேட்) ராஜா &amp; திருமதி. தேவி</b></p>
          <p style="margin: 4px 0 0; color: #92400e; font-weight: 600;">
            தங்கள் குடும்ப சமேதராய் வருகை தந்து எங்களது பிள்ளைகளின் திருமணத்தை ஆசீர்வதிக்கும்படி அன்போடு அழைக்கிறோம்
          </p>
        `}
      </div>

      <!-- Couple Names Banner -->
      <div style="border-top: 2px solid #b45309; border-bottom: 2px solid #b45309; padding: 12px 10px; margin: 12px auto; text-align: center; background: #fffbeb; border-radius: 8px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #b45309; margin-bottom: 4px; font-weight: bold;">
          ${isEn ? '— Groom —' : '— மணமகன் —'}
        </div>
        <div style="font-size: 24px; font-weight: 900; color: #0f172a; letter-spacing: 1px;">
          ${isEn ? WEDDING_DATA.groom.nameEn : WEDDING_DATA.groom.nameTa}
        </div>
        <div style="font-size: 13px; font-style: italic; color: #d97706; margin: 4px 0; font-weight: bold;">
          ${isEn ? 'weds' : 'மற்றும்'}
        </div>
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #b45309; margin-bottom: 4px; font-weight: bold;">
          ${isEn ? '— Bride —' : '— மணமகள் —'}
        </div>
        <div style="font-size: 24px; font-weight: 900; color: #0f172a; letter-spacing: 1px;">
          ${isEn ? WEDDING_DATA.bride.nameEn : WEDDING_DATA.bride.nameTa}
        </div>
      </div>

      <!-- Date & Day -->
      <div style="text-align: center; margin: 12px 0; font-size: 13px; font-weight: bold; color: #92400e;">
        📅 ${isEn ? WEDDING_DATA.dateFormattedEn : WEDDING_DATA.dateFormattedTa}
      </div>

      <!-- Events Schedule 2 Columns -->
      <div style="display: flex; gap: 14px; margin: 14px 0;">
        <!-- Ceremony Box -->
        <div style="flex: 1; background: #fefce8; border: 1.5px solid #fde047; padding: 12px; border-radius: 8px;">
          <div style="font-weight: bold; font-size: 13px; color: #854d0e; margin-bottom: 4px;">
            💒 1. ${isEn ? 'Holy Matrimony Service' : 'பரிசுத்த விவாக ஆராதனை'}
          </div>
          <div style="font-size: 11px; font-weight: 600; color: #92400e; margin-bottom: 3px;">
            ⏰ ${isEn ? 'Time: 5:00 PM Onwards' : 'நேரம்: மாலை 5.00 மணியளவில்'}
          </div>
          <div style="font-size: 11px; color: #1e293b; line-height: 1.4;">
            <b>${isEn ? 'The Pentecostal Mission' : 'த பெந்தெகொஸ்தே சபை'}</b><br/>
            ${isEn ? 'Sharma Nagar, E.H. Road, Chennai - 600039' : 'E.H. ரோடு, சர்மா நகர், சென்னை - 600039'}
          </div>
        </div>

        <!-- Reception Box -->
        <div style="flex: 1; background: #fff7ed; border: 1.5px solid #fdba74; padding: 12px; border-radius: 8px;">
          <div style="font-weight: bold; font-size: 13px; color: #9a3412; margin-bottom: 4px;">
            🎉 2. ${isEn ? 'Wedding Reception & Feast' : 'வரவேற்பு மற்றும் விருந்து'}
          </div>
          <div style="font-size: 11px; font-weight: 600; color: #ea580c; margin-bottom: 3px;">
            ⏰ ${isEn ? 'Time: 7:00 PM Onwards' : 'நேரம்: மாலை 7.00 மணிக்குமேல்'}
          </div>
          <div style="font-size: 11px; color: #1e293b; line-height: 1.4;">
            <b>${isEn ? 'Annal Ambedkar Thirumana Maaligai' : 'அண்ணல் அம்பேத்கர் திருமண மாளிகை'}</b><br/>
            ${isEn ? 'Chandrayogi Main Road, Mangalapuram, Perambur, Chennai - 12' : 'சந்திரயோகி மெயின் ரோடு, மங்களபுரம், பெரம்பூர், சென்னை - 12'}
          </div>
        </div>
      </div>

      <!-- Bus Info -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 10.5px; color: #475569; text-align: center; margin-bottom: 10px;">
        🚌 <b>${isEn ? 'Bus Route' : 'பேருந்து வழித்தடம்'}:</b> 29A, 29B, 29C, 29E, 42, 38C &nbsp;|&nbsp; 
        <b>${isEn ? 'Bus Stop' : 'இறங்குமிடம்'}:</b> Mangalapuram (Jamalia)
      </div>

      <!-- Contacts & Best Compliments -->
      <div style="border-top: 1px solid #d97706; padding-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; color: #64748b;">
        <div>
          <b>${isEn ? 'RSVP Contacts' : 'தொடர்புக்கு'}:</b>
          Latha: +91 81244 16269 &nbsp;|&nbsp; Devi: +91 72002 27347
        </div>
        <div style="font-weight: bold; color: #92400e;">
          ${isEn ? 'With Best Compliments: Friends & Relatives' : 'மங்கள நல்வாழ்த்துகளுடன்: உற்றார், உறவினர் & நண்பர்கள்'}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2, // 2x resolution for ultra-sharp PDF printing
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#faf6ed',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, Math.min(pdfHeight, pdf.internal.pageSize.getHeight()));
    pdf.save(`Jabaraj_Veronica_Wedding_Invitation_${lang.toUpperCase()}.pdf`);
  } finally {
    document.body.removeChild(container);
  }
}
