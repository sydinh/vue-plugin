export default {
    install: (app, options) => {
        app.directive('tooltip', (el, binding) => {
            el.style.position = 'relative';
            const tooltip = document.createElement('div');
            tooltip.style.position = 'absolute';
            tooltip.style.bottom = '100%';
            tooltip.style.backgroundColor = 'black';
            tooltip.style.color = 'white';
            tooltip.style.padding = '0.5em';
            tooltip.style.borderRadius = '0.5em';
            tooltip.style.zIndex = binding.value.zIndex || 1000;
            tooltip.textContent = binding.value.content;
            tooltip.style.display = 'none';
            el.appendChild(tooltip);
            el.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
            });
            el.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });
    }
}
