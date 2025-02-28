document.querySelectorAll('.chart').forEach(chart => {
    const total = parseInt(chart.dataset.total);
    const segments = JSON.parse(chart.dataset.segments);
    const colors = getComputedStyle(document.documentElement)
      .getPropertyValue('--colors').split(', ');
    const pointer = chart.querySelector('.pointer');
    
    // 生成渐变背景
    let accumulated = 0;
    let gradientParts = [];
    
    segments.forEach((segment, index) => {
      const start = (accumulated / total) * 360;
      const end = ((accumulated + segment.value) / total) * 360;
      const color = colors[index % colors.length];
      
      gradientParts.push(`${color} ${start}deg ${end}deg`);
      accumulated += segment.value;
    });
  
    // 单一条目添加灰色背景
    if (segments.length === 1) {
      gradientParts.push(`#ddd ${accumulated/total*360}deg 360deg`);
    }
  
    chart.style.setProperty('--segments', gradientParts.join(', '));
  
    // 事件处理
    chart.addEventListener('mousemove', (e) => {
      const tooltip = document.getElementById('tooltip');
      const rect = chart.getBoundingClientRect();
      const centerX = rect.left + rect.width/2;
      const centerY = rect.top + rect.height/2;
      
      // 计算标准化角度（0-360）
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI + 90;
      let normalizedAngle = (angle + 360) % 360;
      
      // 修复360度边界问题
      if (normalizedAngle >= 359.9) normalizedAngle = 0;
  
      // 更新指针
      pointer.style.display = 'block';
      pointer.style.transform = `rotate(${normalizedAngle}deg)`;
  
      // 精确查找数据段
      let currentStart = 0;
      let foundSegment = null;
      
      for (const [index, segment] of segments.entries()) {
        const segmentEnd = currentStart + (segment.value / total) * 360;
        
        // 处理最后一个数据段的边界
        const endAngle = index === segments.length - 1 ? 360 : segmentEnd;
        
        if (normalizedAngle >= currentStart && normalizedAngle < endAngle) {
          foundSegment = segment;
          break;
        }
        currentStart = segmentEnd;
      }
  
      if (foundSegment) {
        const percent = ((foundSegment.value / total) * 100).toFixed(1);
        tooltip.innerHTML = `
          <strong>${foundSegment.label}</strong>
          ${foundSegment.value}/${total} (${percent}%)
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX + 15}px`;
        tooltip.style.top = `${e.clientY + 15}px`;
      }
    });
  
    chart.addEventListener('mouseleave', () => {
      pointer.style.display = 'none';
      tooltip.style.display = 'none';
    });
  });